import React from 'react'

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import { NavItem } from '@/types'
import { GET_NAV_LINK } from '@/types/constants'

interface Props {
  isCollapsed: boolean
}

export const Sidebar: React.FC<Props> = ({ isCollapsed }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const theme = useTheme()
  const { pathname } = useLocation()
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
    <Box
      height="100%"
      width={isCollapsed ? 70 : 300}
      bgcolor={theme.palette.primary.light}
      sx={{
        transition: theme.transitions.create('width'),
      }}
    >
      <List>
        {navItems.map(({ to, label, icon: Icon }) => (
          <ListItemButton
            onClick={() => navigate(to)}
            key={`${to}-${label}`}
            selected={pathname === to}
          >
            <ListItemIcon sx={{ svg: { color: 'white' } }}>
              <Icon fontSize="large" />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="h6" color="white">
                {label}
              </Typography>
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}
