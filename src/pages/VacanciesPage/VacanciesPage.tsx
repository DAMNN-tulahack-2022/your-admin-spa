import React, { useState } from 'react'

import { Stack } from '@mui/material'

import { Block } from '@/components/Block'
import { useData } from '@/hooks'
import { VacancyProgress } from '@/pages/UserPage/VacancyProgress'
import { VacanciesList } from '@/pages/VacanciesPage/VacanciesList'
import { VacanciesProgressCreationForm } from '@/pages/VacanciesPage/VacanciesProgressCreationForm'
import { getGradesByVacancyId } from '@/utils'

export const VacanciesPage: React.FC = () => {
  const [selectedVacancyId, setSelectedVacancyId] = useState<number>(-1)
  const data = useData()
  const grades = getGradesByVacancyId(selectedVacancyId, data)

  return (
    <Stack direction="row" gap={3}>
      <VacanciesList
        handleVacancyClick={setSelectedVacancyId}
        selectedVacancyId={selectedVacancyId}
      />
      <Block>
        {!grades?.length ? (
          <VacanciesProgressCreationForm
            selectedVacancyId={selectedVacancyId}
          />
        ) : (
          <VacancyProgress viewonly grades={grades} user={data.users[0]} />
        )}
      </Block>
    </Stack>
  )
}
