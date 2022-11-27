import React, { useState } from 'react'

import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { PageTitle } from '@/components/PageTitle'
import { useData } from '@/hooks'
import { VacancyProgress } from '@/pages/UserPage/VacancyProgress'
import { VacanciesList } from '@/pages/VacanciesPage/VacanciesList'
import { VacanciesProgressCreationForm } from '@/pages/VacanciesPage/VacanciesProgressCreationForm'
import { getGradesByVacancyId } from '@/utils'

export const VacanciesPage: React.FC = () => {
  const { t } = useTranslation()
  const [selectedVacancyId, setSelectedVacancyId] = useState<number>(-1)
  const data = useData()
  const grades = getGradesByVacancyId(selectedVacancyId, data)

  return (
    <>
      <PageTitle
        title={t('vacancies')}
        subtitle={t('hereYouCanManageVacancies')}
      />
      <Grid container spacing={3} height={700}>
        <Grid item xs={4} height="100%">
          <VacanciesList
            handleVacancyClick={setSelectedVacancyId}
            selectedVacancyId={selectedVacancyId}
          />
        </Grid>
        <Grid item xs={8}>
          <Block title={t('vacancyProgress')}>
            {!grades?.length ? (
              <VacanciesProgressCreationForm
                selectedVacancyId={selectedVacancyId}
              />
            ) : (
              <VacancyProgress viewonly grades={grades} user={data.users[0]} />
            )}
          </Block>
        </Grid>
      </Grid>
    </>
  )
}
