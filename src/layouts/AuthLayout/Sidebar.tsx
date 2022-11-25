import React from 'react'

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
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
import { GET_NAV_LINK } from '@/types/constants'

export const Sidebar: React.FC = () => {
  const { palette } = useTheme()
  const navItems: NavItem[] = [
    {
      to: GET_NAV_LINK.mainPage(),
      label: 'Главная',
      icon: HomeOutlinedIcon,
    },
    {
      to: GET_NAV_LINK.projectsPage(),
      label: 'Проекты',
      icon: AccountTreeOutlinedIcon,
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
