import { createTheme, responsiveFontSizes } from '@mui/material'

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#724E9F',
        dark: '#462D65',
        light: '#9567CF',
      },
    },
    components: {
      MuiDialogContent: {
        styleOverrides: {
          root: {
            minWidth: 400,
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            fontWeight: 700,
            mb: 2,
          },
        },
      },
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
          ul: {
            margin: 0,
            padding: 0,
          },
        },
      },
    },
  }),
)
