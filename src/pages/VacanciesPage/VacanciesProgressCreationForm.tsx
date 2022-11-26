import React, { useState } from 'react'

import {
  Box,
  Button,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import arrayMutators from 'final-form-arrays'
import { Form } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { useTranslation } from 'react-i18next'

import { SelectField, TextField } from '@/components/Fields'
import { Vacancy } from '@/types'

interface Props {
  selectedVacancyId: number
}

export const VacanciesProgressCreationForm: React.FC<Props> = ({
  selectedVacancyId,
}) => {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(-1)
  const queryClient = useQueryClient()

  // TODO: create new vacancy progress
  const onSubmit = (values: any) => {
    queryClient.setQueryData(['data'], (data: any) => {
      const selectedVacancy = data.vacancies.find(
        ({ id }: any) => id === selectedVacancyId,
      ) as Vacancy
      console.log(selectedVacancy)
      return {
        ...data,
        vacanciesProgresses: [
          ...data.vacanciesProgresses,
          {
            gradesIds: values.grades.map((item: any, idx: any) => idx),
          },
        ],
      }
    })
  }

  if (selectedVacancyId < 0) {
    return <Typography>{t('selectVacancy')}</Typography>
  }

  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators,
      }}
      render={({
        handleSubmit,
        form: {
          mutators: { push, pop },
        },
        values,
      }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="h6">{t('createVacancyProgress')}</Typography>
          {activeStep < 0 && (
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                push('grades', {})
                setActiveStep(activeStep + 1)
              }}
            >
              {t('add')}
            </Button>
          )}
          <FieldArray name="grades">
            {({ fields }) => (
              <Stepper activeStep={activeStep} orientation="vertical">
                {fields.map((name, index) => (
                  <Step key={`${name}-${index}`} active>
                    <StepLabel>
                      <TextField
                        required
                        size="small"
                        name={`${name}.label`}
                        label={t('label')}
                      />
                    </StepLabel>
                    <StepContent>
                      <TextField
                        required
                        size="small"
                        name={`${name}.description`}
                        label={t('description')}
                        rows={8}
                      />
                      <SelectField
                        size="small"
                        name={`${name}.needsApproval`}
                        label={t('needsApproval')}
                        defaultValue={false}
                        items={[
                          { label: t('yes'), value: true },
                          { label: t('false'), value: false },
                        ]}
                      />
                      <TextField
                        required
                        size="small"
                        name={`${name}.experience`}
                        label={t('experience')}
                      />
                      <Stack direction="row" gap={1}>
                        <Button
                          onClick={() => {
                            pop('grades')
                            setActiveStep(activeStep - 1)
                          }}
                        >
                          {t('remove')}
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => {
                            push('grades', {})
                            setActiveStep(activeStep + 1)
                          }}
                        >
                          {t('add')}
                        </Button>
                      </Stack>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            )}
          </FieldArray>
          {values.grades?.length > 0 && (
            <Stack direction="row" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                {t('submit')}
              </Button>
            </Stack>
          )}
        </Box>
      )}
    />
  )
}
