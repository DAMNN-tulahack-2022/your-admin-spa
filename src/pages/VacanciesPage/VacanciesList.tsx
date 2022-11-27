import React from 'react'

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { Box, Button, IconButton, List } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { DialogButton } from '@/components/DialogButton'
import { TextField } from '@/components/Fields'
import { useAxios, useData, useSendToShackbar } from '@/hooks'
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
  const sendToShackbar = useSendToShackbar()

  const { mutate } = useMutation({
    mutationFn: (label: string) =>
      axios.post('/data/vacancies/add', {
        label,
      }),
    onSuccess: newVacancy => {
      sendToShackbar({
        variant: 'success',
        message: 'Вакансия успешно создана',
      })
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
                <Box pt={2}>
                  <TextField name="vacancyLabel" label={t('vacancy')} />
                </Box>
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
