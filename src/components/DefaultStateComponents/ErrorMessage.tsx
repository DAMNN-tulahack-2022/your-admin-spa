import React from 'react'

import { Alert } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { CenterContent } from '@/components/CenterContent'

export const ErrorMessage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <CenterContent>
      <Alert severity="error">{t('dataFetchError')}</Alert>
    </CenterContent>
  )
}
