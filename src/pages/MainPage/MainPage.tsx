import React from 'react'

import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { PageTitle } from '@/components/PageTitle'
import { MainOngoingProjects } from '@/pages/MainPage/MainOngoingProjects'
import { VacanciesPlot } from '@/pages/MainPage/VacanciesPlot'

export const MainPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle title={t('mainPage')} subtitle={`${t('hello')}, Samsung!`} />
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Block title={t('employerGrades')}>
            <VacanciesPlot />
          </Block>
        </Grid>
        <Grid item xs={4}>
          <Block title={t('topOngoing')}>
            <MainOngoingProjects />
          </Block>
        </Grid>
      </Grid>
    </>
  )
}
