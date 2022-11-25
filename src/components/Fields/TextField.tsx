import React, { forwardRef } from 'react'

import { TextField as MuiTextField, TextFieldProps } from '@mui/material'
import { Field } from 'react-final-form'

type Props = {
  name: string
} & TextFieldProps

export const TextField = forwardRef<Props, any>(
  ({ name, ...muiTextFieldProps }, ref) => (
    <Field
      name={name}
      render={props => (
        <MuiTextField
          {...muiTextFieldProps}
          inputProps={props.input}
          inputRef={ref}
        />
      )}
    />
  ),
)
TextField.displayName = 'TextField'
