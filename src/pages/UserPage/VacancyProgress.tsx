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
import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { Grade, Vacancy } from '@/types'

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

  // TODO: mutations to force user step change
  // TODO: make current step
  const goNext = () => {
    console.log(`go next to ${userId}`)
  }
  const goBack = () => {
    console.log(`go back to ${userId}`)
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
                <Button>{t('back')}</Button>
                <Button variant="contained">{t('next')}</Button>
              </Stack>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Block>
  )
}
