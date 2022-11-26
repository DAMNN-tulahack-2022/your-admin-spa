import React, { useState } from 'react'

import { Box, Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { DataProvider } from '@/components/DataProvider'
import {
  LoadingIndication,
  ErrorMessage,
} from '@/components/DefaultStateComponents'
import { useDataContext } from '@/hooks'
import { Header } from '@/layouts/AuthLayout/Header'
import { Sidebar } from '@/layouts/AuthLayout/Sidebar'

export const AuthLayoutWithothContext: React.FC = () => {
  const [isSidebarCollaplsed, setIsSidebarCollapsed] = useState(false)
  const dataContext = useDataContext()

  if (dataContext.isLoading) {
    return <LoadingIndication />
  }

  if (dataContext.hasError) {
    return <ErrorMessage />
  }

  return (
    <Stack height="100vh">
      <Header
        toggleSidebarCollapses={() => setIsSidebarCollapsed(prev => !prev)}
      />
      <Stack direction="row" sx={{ overflowY: 'hidden', flexGrow: 3 }}>
        <Sidebar isCollapsed={isSidebarCollaplsed} />
        <Box height="100%" py={3} sx={{ overflowY: 'auto', flexGrow: 1 }}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Stack>
    </Stack>
  )
}

export const AuthLayout: React.FC = () => {
  return (
    <DataProvider>
      <AuthLayoutWithothContext />
    </DataProvider>
  )
}
