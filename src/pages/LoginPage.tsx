import React from 'react'

import { LoadingButton } from '@mui/lab'
import { Box, Stack, Typography } from '@mui/material'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next'

import { TextField } from '@/components/Fields'

export const LoginPage: React.FC = () => {
  const { t } = useTranslation()

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <Stack
          gap={3}
          component="form"
          onSubmit={handleSubmit}
          alignItems="center"
        >
          <Typography variant="h3">{t('login')}</Typography>
          <TextField name="username" label={t('username')} fullWidth />
          <TextField name="password" label={t('password')} fullWidth />
          <Box width={200}>
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              fullWidth
            >
              {t('logIn')}
            </LoadingButton>
          </Box>
        </Stack>
      )}
    />
  )
}
