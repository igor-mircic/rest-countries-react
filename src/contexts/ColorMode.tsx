import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

const ColorModeContext = createContext({ toggleColorMode: () => {} })
const COLOR_MODE_KEY = 'colorMode'
type TColorMode = 'light' | 'dark'

export const ColorModeProvider: FC = ({ children }) => {
  const savedMode = localStorage.getItem(COLOR_MODE_KEY)
  const [mode, setMode] = useState<TColorMode>(
    savedMode ? (savedMode as TColorMode) : 'light'
  )

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  useEffect(() => {
    if (!savedMode) {
      setMode(prefersDarkMode ? 'dark' : 'light')
    }
  }, [prefersDarkMode, savedMode])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => {
          const currMode = prevMode === 'light' ? 'dark' : 'light'
          localStorage.setItem(COLOR_MODE_KEY, currMode)
          return currMode
        })
      }
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export const useColorMode = () => {
  const context = useContext(ColorModeContext)

  if (context === undefined)
    throw new Error('useColorModeContext must be within a ColorModeProvider')

  return context
}
