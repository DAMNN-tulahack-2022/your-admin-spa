import React from 'react'

import EditIcon from '@mui/icons-material/Edit'
import { IconButton, Stack } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'

import { SelectField } from '@/components/Fields'
import { useAxios, useData } from '@/hooks'
import { User } from '@/types'
import { getVacancyByUser } from '@/utils'

interface Props {
  userId: number
}

export const UserVacancyField: React.FC<Props> = ({ userId }) => {
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  const data = useData()
  const axios = useAxios()
  const vacancies = data.vacancies.map(({ id, label }) => ({
    value: id,
    label,
  }))
  const currentVacancy = getVacancyByUser(
    data.users.find(({ id }) => id === userId) as User,
    data,
  )

  const { mutate: editVacancy } = useMutation({
    mutationFn: ({ userId, vacancyId }: any) =>
      axios.post('/data/users/assign-vacancy', { userId, vacancyId }),
    onSuccess: (updatedUser: any) => {
      const updatedUserIdx = data.users.findIndex(
        (useRr: User) => useRr.id === updatedUser.id,
      )
      queryClient.setQueryData(['data'], (data: any) => {
        return {
          ...data,
          users: [
            ...data.users.slice(0, updatedUserIdx),
            updatedUser,
            ...data.users.slice(updatedUserIdx + 1),
          ],
        }
      })
    },
  })

  return (
    <Form
      onSubmit={(values: any) => {
        console.log({ userId, vacancyId: values.vacancy })
        editVacancy({ userId, vacancyId: values.vacancy })
      }}
      subscription={{ pristine: true }}
      render={({ handleSubmit, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Stack direction="row" alignItems="center">
            <SelectField
              fullWidth
              name="vacancy"
              label={t('vacancy')}
              items={vacancies}
              defaultValue={currentVacancy?.id}
            />
            <IconButton color="info" type="submit" disabled={pristine}>
              <EditIcon />
            </IconButton>
          </Stack>
        </form>
      )}
    />
  )
}
