import React from 'react'

import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined'
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

import { DialogButton } from '@/components/DialogButton'
import { StepApprovalStatus } from '@/components/StepApprovalStatus'
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
  const currentVacancyProgress =
    data.vacanciesProgresses
      .find(({ vacancyId }: any) => vacancyId === user.vacancyId)
      ?.gradesIds.findIndex((gradeId: any) => currentGrade.id === gradeId) || 0

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
      {grades.map((grade, idx) => (
        <Step key={`${grade.label}-${grade.experience}`} {...stepProps}>
          <StepLabel>
            <Stack direction="row" alignItems="center" gap={0.5}>
              <Typography fontWeight={grade?.needsApproval ? 700 : 400}>
                {grade.label}
              </Typography>
              {grade?.needsApproval && (
                <StepApprovalStatus
                  currentStep={idx}
                  stepCount={currentVacancyProgress}
                />
              )}
            </Stack>
          </StepLabel>
          <StepContent>
            <Typography>{grade.description}</Typography>
            {!viewonly && (
              <Stack direction="row" gap={1} mt={1.5}>
                <Button onClick={updateExperience(-1)} variant="outlined">
                  {t('back')}
                </Button>
                {grade?.needsApproval ? (
                  <DialogButton
                    title={t('warning')}
                    renderContent={() => (
                      <Typography>{t('doYouWannaSkipApproval?')}</Typography>
                    )}
                    renderAction={() => (
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={updateExperience(1)}
                      >
                        {t('skip')}
                      </Button>
                    )}
                    renderButton={handleClickOpen => (
                      <Button variant="contained" onClick={handleClickOpen}>
                        {t('next')}
                      </Button>
                    )}
                  />
                ) : (
                  <Button variant="contained" onClick={updateExperience(1)}>
                    {t('next')}
                  </Button>
                )}
              </Stack>
            )}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  )
}
