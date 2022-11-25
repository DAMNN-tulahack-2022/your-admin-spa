import React from 'react'

import { Box, Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Header } from '@/layouts/AuthLayout/Header'
import { Sidebar } from '@/layouts/AuthLayout/Sidebar'

export const AuthLayout: React.FC = () => {
  return (
    <Stack height="100vh">
      <Header />
      <Stack direction="row" sx={{ overflowY: 'hidden', flexGrow: 3 }}>
        <Sidebar />
        <Box height="100%" py={3} sx={{ overflowY: 'auto', flexGrow: 1 }}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Stack>
    </Stack>
  )
}
