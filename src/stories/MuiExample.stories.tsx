import type { Meta, StoryFn } from '@storybook/react'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const meta: Meta = {
  title: 'Example/MUI Example',
}

export default meta

export const MUIButton: StoryFn = () => (
  <div style={{ padding: 16 }}>
    <Button variant="contained" color="primary">MUI Contained</Button>
    <Button variant="outlined" color="secondary" style={{ marginLeft: 8 }}>MUI Outlined</Button>
  </div>
)

export const MUIAppBar: StoryFn = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        MUI AppBar
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
)
