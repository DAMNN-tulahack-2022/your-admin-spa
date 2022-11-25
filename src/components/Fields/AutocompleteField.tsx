import React, { forwardRef } from 'react'

import { AutocompleteProps, Autocomplete, TextField } from '@mui/material'
import { isEqual } from 'lodash/fp'
import { Field } from 'react-final-form'

export type Props = {
  name: string
  label: string
  getOptionValue?: (option: any) => any
} & Omit<AutocompleteProps<any, any, any, any>, 'renderInput'>

export const AutocompleteField = forwardRef<any, Props>(
  (
    { name, label, getOptionValue = option => option, ...muiAutocompleteProps },
    ref,
  ) => (
    <Field
      multiple={!!muiAutocompleteProps.multiple}
      name={name}
      render={props => {
        return (
          <Autocomplete
            {...muiAutocompleteProps}
            onChange={(event, value) => {
              props.input.onChange(getOptionValue(value))
            }}
            renderInput={params => (
              <TextField {...params} label={label} inputRef={ref} />
            )}
            isOptionEqualToValue={isEqual}
            ref={ref}
          />
        )
      }}
    />
  ),
)
AutocompleteField.displayName = 'AutocompleteField'
