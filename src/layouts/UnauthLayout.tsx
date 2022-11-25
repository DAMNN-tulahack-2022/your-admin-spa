import React from 'react'

import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { LanguageSwitch } from '@/components/LanguageSwitch'
import { Fullscreen } from '@/layouts/Fullscreen'

export const UnauthLayout: React.FC = () => (
  <Fullscreen>
    <Container maxWidth="md">
      <LanguageSwitch />
      <Outlet />
    </Container>
  </Fullscreen>
)
