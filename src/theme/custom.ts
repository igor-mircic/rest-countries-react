import { PaletteMode, ThemeOptions } from '@mui/material'

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

export const getCustomTheme = (mode: PaletteMode) =>
  ({
    typography: {
      fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
      button: {
        textTransform: 'capitalize'
      }
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            background: {
              default: 'hsl(0, 0%, 98%)',
              paper: 'hsl(0, 0%, 100%)'
            },
            text: {
              primary: 'hsl(200, 15%, 8%)'
            }
          }
        : {
            // palette values for dark mode
            background: {
              default: 'hsl(208, 26%, 17%)',
              paper: 'hsl(209, 23%, 22%)'
            },
            text: {
              primary: 'hsl(0, 0%, 100%)'
            }
          })
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          color: 'default'
        }
      },
      MuiListItem: {
        defaultProps: {
          disableGutters: true
        }
      },
      MuiSelect: {
        defaultProps: {
          sx: { backgroundColor: 'hsl(209, 23%, 22%)' }
        }
      }
    }
  } as ThemeOptions)
