import React from 'react'

import { Stack } from '@mui/material'

export const CenterContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Stack height="100%" alignItems="center" justifyContent="center">
    {children}
  </Stack>
)
