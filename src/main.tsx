import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/components/App'
import ErrorBoundry from '@/components/ErrorBoundry'
import { theme } from '@/theme'
import '@/modules/i18next'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundry>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundry>
  </React.StrictMode>,
)
