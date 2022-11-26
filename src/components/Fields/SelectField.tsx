import React, { forwardRef } from 'react'

import {
  MenuItem,
  SelectProps,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material'
import { Field } from 'react-final-form'

interface SelectItem {
  value: any
  label: string
}

type Props = {
  name: string
  label: string
  items: SelectItem[]
  defaultValue?: any
} & SelectProps

export const SelectField = forwardRef<any, Props>(
  ({ name, label, items, defaultValue, ...muiSelectProps }, ref) => {
    return (
      <Field
        name={name}
        render={props => {
          return (
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel htmlFor={`${label}-${name}`}>{label}</InputLabel>
              <Select
                {...muiSelectProps}
                label={label}
                inputRef={ref}
                ref={ref}
                defaultValue={defaultValue}
                onChange={event => {
                  props.input.onChange(event.target.value)
                }}
              >
                {items.map(({ value, label }) => (
                  <MenuItem value={value} key={`${value}-${label}`}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )
        }}
      />
    )
  },
)
SelectField.displayName = 'SelectField'
