import React from 'react'

import { ListItemButton, ListItemText, useTheme } from '@mui/material'

import { Vacancy as IVacancy } from '@/types'

interface Props {
  vacancy: IVacancy
  handleClick: (id: number) => void
  selected: boolean
}

export const Vacancy: React.FC<Props> = ({
  vacancy,
  handleClick,
  selected,
}) => {
  const { palette } = useTheme()
  return (
    <ListItemButton
      onClick={() => handleClick(vacancy.id)}
      selected={selected}
      sx={{ border: `1px solid ${palette.grey.A200}`, mb: 2, borderRadius: 2 }}
    >
      <ListItemText>{vacancy.label}</ListItemText>
    </ListItemButton>
  )
}
