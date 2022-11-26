import React from 'react'

import { ListItemButton, ListItemText } from '@mui/material'

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
  return (
    <ListItemButton onClick={() => handleClick(vacancy.id)} selected={selected}>
      <ListItemText>{vacancy.label}</ListItemText>
    </ListItemButton>
  )
}
