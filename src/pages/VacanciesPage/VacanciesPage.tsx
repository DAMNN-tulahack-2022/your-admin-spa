import React, { useState } from 'react'

import { Stack } from '@mui/material'

import { VacanciesList } from '@/pages/VacanciesPage/VacanciesList'
import { VacanciesProgressCreationForm } from '@/pages/VacanciesPage/VacanciesProgressCreationForm'

export const VacanciesPage: React.FC = () => {
  const [selectedVacancyId, setSelectedVacancyId] = useState<string>('')

  return (
    <Stack direction="row" gap={3}>
      <VacanciesList
        handleVacancyClick={setSelectedVacancyId}
        selectedVacancyId={selectedVacancyId}
      />
      <VacanciesProgressCreationForm />
    </Stack>
  )
}
