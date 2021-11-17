import { PaletteMode, ThemeOptions } from '@mui/material'

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

interface IColors {
  default: string
  paper: string
  text: string
}

export const getCustomTheme = (mode: PaletteMode) => {
  let clr: IColors
  if (mode === 'light') {
    clr = {
      default: 'hsl(0, 0%, 98%)',
      paper: 'hsl(0, 0%, 100%)',
      text: 'hsl(200, 15%, 8%)'
    }
  } else {
    clr = {
      default: 'hsl(208, 26%, 17%)',
      paper: 'hsl(209, 23%, 22%)',
      text: 'hsl(0, 0%, 100%)'
    }
  }
  const theme: ThemeOptions = {
    typography: {
      fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
      button: {
        textTransform: 'capitalize'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280,
        xl: 1536
      }
    },
    palette: {
      mode,
      primary: {
        main: clr.text
      },
      secondary: {
        main: clr.paper
      },
      background: {
        default: clr.default,
        paper: clr.paper
      },
      text: {
        primary: clr.text
      }
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          color: 'default',
          sx: {
            height: 20
          }
        }
      },
      MuiListItem: {
        defaultProps: {
          disableGutters: true
        }
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg'
        }
      },
      MuiButton: {
        defaultProps: {
          color: 'secondary',
          variant: 'contained'
        }
      }
    }
  }
  return theme
}
