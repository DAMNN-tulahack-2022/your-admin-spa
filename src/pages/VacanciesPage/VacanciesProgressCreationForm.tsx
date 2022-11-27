import React, { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Grid,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import arrayMutators from 'final-form-arrays'
import { Form } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { useTranslation } from 'react-i18next'

import { SelectField, TextField } from '@/components/Fields'
import { useAxios } from '@/hooks'

interface Props {
  selectedVacancyId: number
}

export const VacanciesProgressCreationForm: React.FC<Props> = ({
  selectedVacancyId,
}) => {
  const { t } = useTranslation()
  const [length, setLength] = useState<any>(-1)
  const [activeStep, setActiveStep] = useState(-1)
  const [gradesId, setGradesId] = useState<any>([])
  const queryClient = useQueryClient()
  const axios = useAxios()
  const { mutate: addGrade } = useMutation({
    mutationFn: (grade: any) =>
      axios.post('/data/grades/add', grade).then(response => response),
    onSuccess: (newGrade: any) => {
      setGradesId((prev: any) => [...prev, newGrade.id])
      queryClient.setQueryData(['data'], (data: any) => ({
        ...data,
        grades: [...data.grades, newGrade],
      }))
    },
  })
  const { mutate: addVacancyProgress } = useMutation({
    mutationFn: (vacancyProgress: any) =>
      axios.post('/data/grade-progress/add', vacancyProgress),
    onSuccess: newVacancyProgress => {
      queryClient.setQueryData(['data'], (data: any) => ({
        ...data,
        vacanciesProgresses: [...data.vacanciesProgresses, newVacancyProgress],
      }))
    },
  })

  const onSubmit = async (values: any) => {
    await Promise.all(values.grades.map(addGrade))
    setLength(values.grades.length)
  }

  useEffect(() => {
    if (length === gradesId.length) {
      addVacancyProgress({
        vacancyId: selectedVacancyId,
        gradesIds: gradesId,
      })
    }
  }, [gradesId, selectedVacancyId, length])

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
          {activeStep < 0 && (
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                push('grades', {})
                setActiveStep(activeStep + 1)
              }}
            >
              {t('createNewProgress')}
            </Button>
          )}
          <Box>
            <FieldArray name="grades">
              {({ fields }) => (
                <Stepper activeStep={activeStep} orientation="vertical">
                  {fields.map((name, index) => (
                    <Step key={`${name}-${index}`} active>
                      <StepLabel sx={{ mb: 1 }}>
                        <TextField
                          required
                          size="small"
                          name={`${name}.label`}
                          label={t('label')}
                        />
                      </StepLabel>
                      <StepContent>
                        <Grid container spacing={2}>
                          <Grid item xs={8}>
                            <TextField
                              required
                              size="small"
                              name={`${name}.description`}
                              label={t('description')}
                              multiline
                              rows={3.5}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <Stack gap={2}>
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
                            </Stack>
                          </Grid>
                          <Grid item xs={12}>
                            <Stack
                              direction="row"
                              gap={1}
                              justifyContent="flex-end"
                            >
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
                          </Grid>
                        </Grid>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              )}
            </FieldArray>
          </Box>
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
