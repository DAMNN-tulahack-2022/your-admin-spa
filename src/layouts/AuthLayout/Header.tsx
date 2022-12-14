import React, { useState } from 'react'

import AccountCircle from '@mui/icons-material/AccountCircle'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined'
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined'
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'

import { LanguageSwitch } from '@/components/LanguageSwitch'

interface Props {
  toggleSidebarCollapses: () => void
  isSidebarCollapsed: boolean
}

export const Header: React.FC<Props> = ({
  toggleSidebarCollapses,
  isSidebarCollapsed,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleSidebarCollapses}
        >
          {isSidebarCollapsed ? (
            <KeyboardDoubleArrowRightOutlinedIcon />
          ) : (
            <KeyboardDoubleArrowLeftOutlinedIcon />
          )}
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Your
        </Typography>
        <LanguageSwitch />
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}
