import React from 'react'

import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { useData } from '@/hooks'
import { User } from '@/types'
import { getGradeByUser } from '@/utils'

interface Props extends User {
  buttonProps: any
}

export const UserOption: React.FC<Props> = ({ buttonProps, ...teamLead }) => {
  const data = useData()
  return (
    <ListItemButton {...buttonProps}>
      <ListItemIcon>
        <Avatar alt="team lead" src={teamLead.avatarUrl} />
      </ListItemIcon>
      <ListItemText
        primary={`${teamLead.lastName} ${teamLead.firstName}`}
        secondary={getGradeByUser(teamLead, data)?.label}
      />
    </ListItemButton>
  )
}
