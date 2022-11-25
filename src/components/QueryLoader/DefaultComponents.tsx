import React from 'react'

import { Alert, CircularProgress } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { CenterContent } from '@/components/CenterContent'

export const DefaultLoading: React.FC = () => (
  <CenterContent>
    <CircularProgress />
  </CenterContent>
)

export const DefaultError: React.FC = () => {
  const { t } = useTranslation()

  return (
    <CenterContent>
      <Alert severity="error">{t('dataFetchError')}</Alert>
    </CenterContent>
  )
}

export const DefaultEmpty: React.FC = () => null
