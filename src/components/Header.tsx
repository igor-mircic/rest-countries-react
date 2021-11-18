import { Brightness4, Brightness7 } from '@mui/icons-material'
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import { useTheme } from '@mui/system'
import { useColorMode } from '../contexts/ColorMode'

export const Header = () => {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()
  const mode = theme.palette.mode

  return (
    <AppBar position="sticky" sx={{ justifyContent: 'center', height: 80 }}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            sx={{ flexGrow: 1, fontWeight: 800 }}
            variant="h6"
            component="h1"
          >
            Where in the world?
          </Typography>
          <Button
            onClick={toggleColorMode}
            color="inherit"
            variant="text"
            startIcon={
              theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />
            }
          >
            <Typography sx={{ fontWeight: 600 }}>{mode + ' mode'}</Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
