import { createTheme, responsiveFontSizes } from '@mui/material'

export const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            minHeight: '100vh',
            margin: 0,
            padding: 0,
          },
          form: {
            width: '100%',
          },
        },
      },
    },
  }),
)
