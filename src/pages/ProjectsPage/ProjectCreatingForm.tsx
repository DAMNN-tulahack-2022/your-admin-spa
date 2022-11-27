import React from 'react'

import { Button, Stack } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'

import { AutocompleteField, TextField } from '@/components/Fields'
import { UsersAutocompleteField } from '@/components/UsersAutocompleteField'
import { useAxios, useData } from '@/hooks'
import { UserRole } from '@/types/constants'

export const ProjectCreatingForm: React.FC = () => {
  const axios = useAxios()
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  const { skills } = useData()

  const { mutate } = useMutation({
    mutationFn: (project: any) => axios.post('/data/projects/add', project),
    onSuccess: newProject => {
      queryClient.setQueryData(['data'], (data: any) => ({
        ...data,
        projects: [...data.projects, newProject],
      }))
    },
  })

  return (
    <Form
      onSubmit={(values: any) => mutate(values)}
      render={({ handleSubmit }) => (
        <Stack component="form" onSubmit={handleSubmit} gap={3} maxWidth={500}>
          <TextField name="label" label={t('label')} />
          <UsersAutocompleteField
            name="teamLead"
            label={t('teamLead')}
            filterByRole={UserRole.TeamLead}
          />
          <AutocompleteField
            multiple
            name="skillsIds"
            label={t('skills')}
            options={skills}
          />
          <UsersAutocompleteField
            multiple
            name="users"
            label={t('users')}
            filterByRole={UserRole.User}
          />
          <TextField name="experience" label={t('experience')} />
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
