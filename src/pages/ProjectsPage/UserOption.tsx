import React from 'react'

import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

interface Props {
  avatarUrl: string
  lastName: string
  firstName: string
  levelTitle: string
  buttonProps: any
}

export const UserOption: React.FC<Props> = ({
  avatarUrl,
  levelTitle,
  buttonProps,
  firstName,
  lastName,
}) => (
  <ListItemButton {...buttonProps}>
    <ListItemIcon>
      <Avatar alt="team lead" src={avatarUrl} />
    </ListItemIcon>
    <ListItemText primary={`${lastName} ${firstName}`} secondary={levelTitle} />
  </ListItemButton>
)
