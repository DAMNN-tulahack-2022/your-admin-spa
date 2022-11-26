import React from 'react'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { Box, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  subtitle?: string | null
  showback?: boolean
}

export const PageTitle: React.FC<Props> = ({
  title,
  subtitle,
  showback = false,
}) => {
  const navigate = useNavigate()

  return (
    <Box mb={4}>
      {title && (
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {subtitle}
        </Typography>
      )}
      {showback && (
        <Stack
          direction="row"
          gap={1}
          onClick={() => {
            if (window.history.state && window.history.state.idx > 0) {
              navigate(-1)
            } else {
              navigate('/', { replace: true })
            }
          }}
          sx={{ cursor: 'pointer', display: 'inline-flex' }}
          alignItems="center"
        >
          <KeyboardBackspaceIcon />
          <Typography variant="h6" color="text.secondary">
            {subtitle}
          </Typography>
        </Stack>
      )}
    </Box>
  )
}
