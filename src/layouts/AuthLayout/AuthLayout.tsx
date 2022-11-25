import React from 'react'

import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Header } from '@/layouts/AuthLayout/Header'
import { Sidebar } from '@/layouts/AuthLayout/Sidebar'

export const AuthLayout: React.FC = () => {
  return (
    <Stack height="100vh">
      <Header />
      <Stack direction="row" sx={{ overflowY: 'hidden', flexGrow: 3 }}>
        <Sidebar />
        <Box height="100%" sx={{ overflowY: 'auto', flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  )
}
