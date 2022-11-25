import React from 'react'

import { Stack } from '@mui/material'

import { Children } from '@/types'

export const Fullscreen: React.FC<{
  children: Children
}> = ({ children }) => (
  <Stack height="100vh" justifyContent="center" alignItems="center">
    {children}
  </Stack>
)
