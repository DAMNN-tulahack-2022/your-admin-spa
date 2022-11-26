import React, { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import { PageTitle } from '@/components/PageTitle'

export const MainPage: React.FC = () => {
  const { t } = useTranslation()

  useEffect(() => {
    fetch('http://193.43.147.117:8086/data/lib').then(console.log)
  }, [])

  return (
    <>
      <PageTitle title={t('mainPage')} subtitle={t('hereYouCanSee')} />
      <div>тут будут метрики компании</div>
    </>
  )
}
