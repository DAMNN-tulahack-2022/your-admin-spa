import React from 'react'

import { Box, BoxProps, Divider, Paper, Stack, Typography } from '@mui/material'

import { Children } from '@/types'

interface Props {
  title?: any
  disablePadding?: boolean
  action?: React.ReactNode
  children: Children
}

export const Block: React.FC<Props & BoxProps> = ({
  children,
  title,
  action,
  disablePadding = false,
  ...boxProps
}) => {
  const px = disablePadding ? 0 : 3.5
  const py = disablePadding ? 0 : 2
  return (
    <Paper
      sx={{
        borderRadius: 2,
        boxShadow: '2px 2px 10px 2px rgba(70, 45, 101, 0.1) !important',
        height: '100%',
      }}
    >
      {title && (
        <Box px={px} py={py}>
          <Stack direction="row" gap={0.5} alignItems="center" height={25}>
            <Typography variant="h6" fontWeight={500}>
              {title}
            </Typography>
            {action}
          </Stack>
          <Divider sx={{ mt: py }} />
        </Box>
      )}
      <Box px={px} py={py} {...boxProps} height="85%">
        {children}
      </Box>
    </Paper>
  )
}
