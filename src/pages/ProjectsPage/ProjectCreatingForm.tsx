import React from 'react'

import { Button, Stack, Typography } from '@mui/material'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'

import { AutocompleteField, TextField } from '@/components/Fields'
import { UsersAutocompleteField } from '@/components/UsersAutocompleteField'

import data from '../../mock/data.json'

export const ProjectCreatingForm: React.FC = () => {
  const { t } = useTranslation()

  // TODO: fetch users
  const techologies = data.technologies

  const handleSubmit = (values: any) => {
    // TODO: create project
    console.log(values)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <Stack component="form" onSubmit={handleSubmit} gap={3} maxWidth={500}>
          <Typography variant="h5">{t('createNewProject')}</Typography>
          <TextField name="label" label={t('label')} />
          <UsersAutocompleteField name="teamLead" label={t('teamLead')} />
          <AutocompleteField
            multiple
            name="technologiesId"
            label={t('techonolies')}
            options={techologies}
          />
          <UsersAutocompleteField multiple name="users" label={t('users')} />
          <TextField
            name="description"
            label={t('description')}
            multiline
            rows={6}
          />
          <Button type="submit" variant="contained">
            {t('create')}
          </Button>
        </Stack>
      )}
    />
  )
}
