import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 375,
      lg: 768,
      xl: 1920,
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
