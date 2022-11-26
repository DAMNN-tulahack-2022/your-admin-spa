import React from 'react'

import { CircularProgress } from '@mui/material'

import { CenterContent } from '@/components/CenterContent'

export const LoadingIndication: React.FC = () => (
  <CenterContent>
    <CircularProgress />
  </CenterContent>
)
