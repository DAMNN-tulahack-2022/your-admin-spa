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
import arrayMutators from 'final-form-arrays'
import { Form, Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { TextField } from '@/components/Fields'

export const VacanciesProgressCreationForm: React.FC = () => {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)

  // TODO: create new vacancy progress
  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Block>
      {/*<div>VacanciesProgressCreationForm</div>*/}
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
          pristine,
          form,
          submitting,
          values,
        }) => (
          <Box component="form" onSubmit={handleSubmit}>
            <Button
              onClick={() => {
                pop('grades')
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
            <FieldArray name="grades">
              {({ fields }) =>
                fields.map((name, index) => (
                  <Box key={`${name}-${index}`}>
                    <TextField name={`${name}.label`} label={t('label')} />
                    <TextField
                      name={`${name}.description`}
                      label={t('description')}
                      rows={8}
                    />
                    <TextField
                      name={`${name}.needsApprobal`}
                      label={t('label')}
                    />
                    <TextField
                      name={`${name}.experience`}
                      label={t('experience')}
                    />
                    <Stack direction="row" gap={1}></Stack>
                  </Box>
                ))
              }
            </FieldArray>
            <Stack direction="row" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                {t('submit')}
              </Button>
            </Stack>
          </Box>
        )}
      />
    </Block>
  )
}
