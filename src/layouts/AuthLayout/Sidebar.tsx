import React from 'react'

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
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
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { NavItem } from '@/types'
import { GET_NAV_LINK } from '@/types/constants'

export const Sidebar: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { palette } = useTheme()
  const navItems: NavItem[] = [
    {
      to: GET_NAV_LINK.mainPage(),
      label: t('home'),
      icon: HomeOutlinedIcon,
    },
    {
      to: GET_NAV_LINK.projectsPage(),
      label: t('projects'),
      icon: AccountTreeOutlinedIcon,
    },
    {
      to: GET_NAV_LINK.usersPage(),
      label: t('users'),
      icon: PeopleOutlineIcon,
    },
    {
      to: GET_NAV_LINK.vacanciesPage(),
      label: t('vacancies'),
      icon: AssignmentIndOutlinedIcon,
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
