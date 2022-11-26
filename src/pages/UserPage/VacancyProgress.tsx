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

import { Block } from '@/components/Block'
import { Grade, User, Vacancy } from '@/types'

interface Props {
  vacancy: Vacancy
  grades: Grade[]
  id: string
  userId: string
}

export const VacancyProgress: React.FC<Props> = ({
  vacancy,
  grades,
  id,
  userId,
}) => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const experienceDelta = 100

  // TODO: mutations to force user step change
  // TODO: make current step
  const updateExperience = (coef: number) => () => {
    queryClient.setQueryData(['data'], (data: any) => {
      const targetUser = data.users.find((user: User) => userId === user.id)
      const targetUserIdx = data.users.findIndex(
        (user: User) => userId === user.id,
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
          ...data.users.slice(transformedTargetUser + 1),
        ],
      }
    })
  }

  return (
    <Block minHeight={700}>
      <Stepper activeStep={0} orientation="vertical">
        {grades.map(grade => (
          <Step key={`${grade.label}-${grade.experience}`}>
            <StepLabel>{grade.label}</StepLabel>
            <StepContent>
              <Typography>{grade.description}</Typography>
              <Stack direction="row" gap={1}>
                <Button onClick={updateExperience(-1)}>{t('back')}</Button>
                <Button variant="contained" onClick={updateExperience(1)}>
                  {t('next')}
                </Button>
              </Stack>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Block>
  )
}
