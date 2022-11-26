import React from 'react'

import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'

import { useData } from '@/hooks'
import { MetricsPlot } from '@/pages/UserPage/MetricsPlot'
import { UserInfo } from '@/pages/UserPage/UserInfo'
import { VacancyProgress } from '@/pages/UserPage/VacancyProgress'
import { User } from '@/types'
import { getVacancyByUser, getVacancyProgressByVacancy } from '@/utils'

export const UserPage: React.FC = () => {
  const params = useParams()

  const data = useData()
  const user = data.users.find(({ id }) => id === params.id) as User
  const vacancy = getVacancyByUser(user, data)
  const vacancyProgress = getVacancyProgressByVacancy(vacancy, data)
  const gap = 5

  return (
    <Stack direction="row" gap={gap}>
      <VacancyProgress
        userId={user.id}
        vacancy={vacancy}
        id={vacancyProgress.id}
        grades={
          data.grades.filter(({ id }) =>
            vacancyProgress.gradesIds.includes(id),
          ) || []
        }
      />
      <Stack gap={gap}>
        <MetricsPlot />
        <UserInfo user={user} />
      </Stack>
    </Stack>
  )
}
