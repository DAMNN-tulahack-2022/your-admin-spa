import React from 'react'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  useTheme,
} from '@mui/material'

import { NavItem } from '@/types'

export const Sidebar: React.FC = () => {
  const { palette } = useTheme()
  const navItems: NavItem[] = [
    {
      to: '/',
      label: 'Главная',
      icon: HomeOutlinedIcon,
    },
    {
      to: '/',
      label: 'Главная',
      icon: HomeOutlinedIcon,
    },
    {
      to: '/',
      label: 'Главная',
      icon: HomeOutlinedIcon,
    },
    {
      to: '/',
      label: 'Главная',
      icon: HomeOutlinedIcon,
    },
    {
      to: '/',
      label: 'Главная',
      icon: HomeOutlinedIcon,
    },
  ]

  return (
    <Box height="100%" width={300} bgcolor={palette.primary.light}>
      <MenuList>
        {navItems.map(({ to, label, icon: Icon }) => (
          <MenuItem key={`${to}-${label}`}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  )
}
