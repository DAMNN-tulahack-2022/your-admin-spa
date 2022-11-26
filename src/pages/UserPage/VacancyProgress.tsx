import React from 'react'

import {
  Button,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

import { useData } from '@/hooks'
import { Grade, User } from '@/types'
import { getGradeByUser } from '@/utils'

interface Props {
  grades: Grade[]
  user: User
  viewonly?: boolean
}

export const VacancyProgress: React.FC<Props> = ({
  grades,
  user,
  viewonly = false,
}) => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const experienceDelta = 50

  const data = useData()
  const currentGrade = getGradeByUser(user, data)
  const currentVacancyProgress = data.vacanciesProgresses
    .find(({ vacancyId }: any) => vacancyId === user.vacancyId)
    ?.gradesIds.findIndex((gradeId: any) => currentGrade.id === gradeId)

  const updateExperience = (coef: number) => () => {
    queryClient.setQueryData(['data'], (data: any) => {
      const targetUser = data.users.find((useRr: User) => useRr.id === useRr.id)
      const targetUserIdx = data.users.findIndex(
        (useRr: User) => useRr.id === user.id,
      )
      const transformedTargetUser = {
        ...targetUser,
        totalExperience: targetUser.totalExperience + coef * experienceDelta,
      }
      return {
        ...data,
        users: [
          ...data.users.slice(0, targetUserIdx),
          transformedTargetUser,
          ...data.users.slice(targetUserIdx + 1),
        ],
      }
    })
  }

  const stepProps = viewonly ? { active: true } : {}

  return (
    <Stepper activeStep={currentVacancyProgress} orientation="vertical">
      {grades.map(grade => (
        <Step key={`${grade.label}-${grade.experience}`} {...stepProps}>
          <StepLabel>{grade.label}</StepLabel>
          <StepContent>
            <Typography>{grade.description}</Typography>
            {!viewonly && (
              <Stack direction="row" gap={1}>
                <Button onClick={updateExperience(-1)}>{t('back')}</Button>
                <Button variant="contained" onClick={updateExperience(1)}>
                  {t('next')}
                </Button>
              </Stack>
            )}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  )
}
