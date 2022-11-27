import React from 'react'

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { Button, IconButton, List } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { DialogButton } from '@/components/DialogButton'
import { TextField } from '@/components/Fields'
import { useAxios, useData } from '@/hooks'
import { Vacancy } from '@/pages/VacanciesPage/Vacancy'

interface Props {
  selectedVacancyId: number
  handleVacancyClick: (id: number) => void
}

export const VacanciesList: React.FC<Props> = ({
  handleVacancyClick,
  selectedVacancyId,
}) => {
  const queryClient = useQueryClient()
  const { vacancies } = useData()
  const { t } = useTranslation()
  const axios = useAxios()

  const { mutate } = useMutation({
    mutationFn: (label: string) =>
      axios.post('/data/vacancies/add', {
        label,
      }),
    onSuccess: newVacancy => {
      queryClient.setQueryData(['data'], (data: any) => ({
        ...data,
        vacancies: [...data.vacancies, newVacancy],
      }))
    },
  })

  return (
    <Block
      title={t('vacanciesList')}
      action={
        <Form
          onSubmit={(values: any) => mutate(values.vacancyLabel)}
          render={({ handleSubmit }) => (
            <DialogButton
              handleSubmit={handleSubmit}
              renderButton={handleClickOpen => (
                <IconButton onClick={handleClickOpen}>
                  <AddCircleOutlineOutlinedIcon />
                </IconButton>
              )}
              title={t('createNewVacancy')}
              renderContent={() => (
                <TextField name="vacancyLabel" label={t('vacancy')} />
              )}
              renderAction={() => (
                <Button type="submit" variant="contained">
                  {t('submit')}
                </Button>
              )}
            />
          )}
        />
      }
    >
      <List disablePadding>
        {vacancies.map(vacancy => (
          <Vacancy
            vacancy={vacancy}
            key={vacancy.label}
            handleClick={handleVacancyClick}
            selected={selectedVacancyId === vacancy.id}
          />
        ))}
      </List>
    </Block>
  )
}
