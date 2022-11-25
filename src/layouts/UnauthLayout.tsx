import React from 'react'

import { Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { LanguageSwitch } from '@/components/LanguageSwitch'

export const UnauthLayout: React.FC = () => (
  <Stack height="100vh" justifyContent="center" alignItems="center">
    <Container maxWidth="md">
      <LanguageSwitch />
      <Outlet />
    </Container>
  </Stack>
)
