import { Brightness4, Brightness7 } from '@mui/icons-material'
import { IconButton, Toolbar } from '@mui/material'
import { useTheme } from '@mui/system'
import { useColorMode } from '../contexts/ColorMode'

export const Header = () => {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()
  const mode = theme.palette.mode

  return (
    <div>
      <Toolbar>
        {mode + 'mode'}
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </div>
  )
}
