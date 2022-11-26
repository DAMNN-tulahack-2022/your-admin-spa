import React from 'react'

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  useTheme,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { NavItem } from '@/types'
import { GET_NAV_LINK } from '@/types/constants'

export const Sidebar: React.FC = () => {
  const navigate = useNavigate()
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
      to: GET_NAV_LINK.usersPage(),
      label: 'Пользователи',
      icon: PeopleOutlineIcon,
    },
  ]

  return (
    <Box height="100%" width={300} bgcolor={palette.primary.light}>
      <MenuList>
        {navItems.map(({ to, label, icon: Icon }) => (
          <MenuItem onClick={() => navigate(to)} key={`${to}-${label}`}>
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
