import React from 'react'

import { Box, BoxProps, Paper } from '@mui/material'

import { Children } from '@/types'

export const Block: React.FC<{ children: Children } & BoxProps> = ({
  children,
  ...boxProps
}) => (
  <Paper
    sx={{
      borderRadius: 1,
      boxShadow: '2px 2px 10px 2px rgba(70, 45, 101, 0.1) !important',
      height: '100%',
    }}
  >
    <Box px={6} py={4} {...boxProps}>
      {children}
    </Box>
  </Paper>
)
