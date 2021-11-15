import { CssBaseline } from '@mui/material'
import { Header } from './components/Header'
import { ColorModeProvider } from './contexts/ColorMode'
import { CountriesProvider } from './contexts/Countries'
import { Router } from './Router'

export const App = () => {
  return (
    <CountriesProvider>
      <ColorModeProvider>
        <CssBaseline />
        <Header />
        <Router />
      </ColorModeProvider>
    </CountriesProvider>
  )
}
