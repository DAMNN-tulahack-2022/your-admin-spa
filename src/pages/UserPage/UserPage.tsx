import React from 'react'

import { Grid, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { Block } from '@/components/Block'
import { PageTitle } from '@/components/PageTitle'
import { useData } from '@/hooks'
import { MetricsPlot } from '@/pages/UserPage/MetricsPlot'
import { UserInfo } from '@/pages/UserPage/UserInfo'
import { VacancyProgress } from '@/pages/UserPage/VacancyProgress'
import { User } from '@/types'
import { getVacancyByUser, getVacancyProgressByVacancy } from '@/utils'

export const UserPage: React.FC = () => {
  const params = useParams()
  const { t } = useTranslation()

  const data = useData()
  const user = data.users.find(({ id }) => id === Number(params.id)) as User
  const vacancy = getVacancyByUser(user, data)
  const vacancyProgress = getVacancyProgressByVacancy(vacancy, data)
  const gap = 5

  return (
    <>
      <PageTitle
        title={t('userPage') + `${user.id}`}
        subtitle={t('metricsAndInfoAboutSelectedUser')}
        showback
      />
      <Grid container spacing={gap}>
        <Grid item xs={4}>
          <Block minHeight={700} title={t('progress')}>
            <VacancyProgress
              user={user}
              grades={
                data.grades.filter(({ id }) =>
                  vacancyProgress.gradesIds?.includes(id),
                ) || []
              }
            />
          </Block>
        </Grid>
        <Grid item xs={8}>
          <Stack gap={gap}>
            <Block title={t('metrics')}>
              <MetricsPlot />
            </Block>
            <Block title={t('info')}>
              <UserInfo user={user} />
            </Block>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}
