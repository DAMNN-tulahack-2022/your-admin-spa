import React from 'react'

import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Block } from '@/components/Block'
import { useData } from '@/hooks'
import { MetricsPlot } from '@/pages/UserPage/MetricsPlot'
import { UserInfo } from '@/pages/UserPage/UserInfo'
import { VacancyProgress } from '@/pages/UserPage/VacancyProgress'
import { User } from '@/types'
import { getVacancyByUser, getVacancyProgressByVacancy } from '@/utils'

export const UserPage: React.FC = () => {
  const params = useParams()

  const data = useData()
  const user = data.users.find(({ id }) => id === Number(params.id)) as User
  const vacancy = getVacancyByUser(user, data)
  const vacancyProgress = getVacancyProgressByVacancy(vacancy, data)
  const gap = 5

  return (
    <Stack direction="row" gap={gap}>
      <Block minHeight={700}>
        <VacancyProgress
          user={user}
          grades={
            data.grades.filter(({ id }) =>
              vacancyProgress.gradesIds.includes(id),
            ) || []
          }
        />
      </Block>
      <Stack gap={gap}>
        <MetricsPlot />
        <UserInfo user={user} />
      </Stack>
    </Stack>
  )
}
