import React from 'react'

import { useTranslation } from 'react-i18next'

import { PageTitle } from '@/components/PageTitle'

export const MainPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle title={t('mainPage')} subtitle={t('hereYouCanSee')} />
      <div>тут будут метрики компании</div>
    </>
  )
}
