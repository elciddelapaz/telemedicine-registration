import React from 'react'
import { AppBar, Toolbar, Stack, Button, createTheme } from '@mui/material';


function Navbar() {
  const theme = createTheme({
    primary: '#1e6c93'
  })
  return (
    <AppBar position='static' theme={theme}>
      <Toolbar>
        <Stack direction='row' spacing={2} sx={{ flexGrow: 1 }}>
          <img src='./amcm.png' height='auto' width={120} alt='' />
        </Stack>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' disableRipple>Home</Button>
          <Button color='inherit' disableRipple>Register</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;