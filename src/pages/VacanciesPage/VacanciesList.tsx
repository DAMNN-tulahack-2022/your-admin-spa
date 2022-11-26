import React from 'react'

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { Button, IconButton, List, Stack, Typography } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { DialogButton } from '@/components/DialogButton'
import { TextField } from '@/components/Fields'
import { useData } from '@/hooks'
import { Vacancy } from '@/pages/VacanciesPage/Vacancy'

interface Props {
  selectedVacancyId: string
  handleVacancyClick: (id: string) => void
}

export const VacanciesList: React.FC<Props> = ({
  handleVacancyClick,
  selectedVacancyId,
}) => {
  const queryClient = useQueryClient()
  const { vacancies } = useData()
  const { t } = useTranslation()

  const handleSubmit = (values: any) => {
    // TODO: Add vacancy
    queryClient.setQueryData(['data'], (data: any) => {
      return {
        ...data,
        vacancies: [
          ...data.vacancies,
          {
            label: values.vacancyLabel,
            id: 2312312,
          },
        ],
      }
    })
  }

  return (
    <Block>
      <Stack direction="row" gap={1} alignItems="center">
        <Typography>{t('createNewVacancy')}</Typography>
        <Form
          onSubmit={handleSubmit}
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
      </Stack>
      <List>
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
