import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 375,
      md: 768,
      lg: 1920,
      xl: 2400,
    }
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
