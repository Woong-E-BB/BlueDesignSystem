import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Snackbar from '@mui/material/Snackbar'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Avatar from '@mui/material/Avatar'
import Checkbox from '@mui/material/Checkbox'
import Switch from '@mui/material/Switch'
import Slider from '@mui/material/Slider'
import CircularProgress from '@mui/material/CircularProgress'
import Chip from '@mui/material/Chip'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
// Using a simple glyph for expand icon to avoid requiring @mui/icons-material package
import MenuIcon from '@mui/icons-material/Menu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const meta: Meta = {
  title: 'Material/Showcase',
}

export default meta

export const Showcase: StoryObj = () => {
  const [tab, setTab] = React.useState(0)
  const [selectValue, setSelectValue] = React.useState('one')
  const [snackOpen, setSnackOpen] = React.useState(false)
  const [dialogOpen, setDialogOpen] = React.useState(false)

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Material Showcase
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Stack spacing={4}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Buttons
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
              <Button variant="contained" color="secondary" onClick={() => setSnackOpen(true)}>
                Show Snackbar
              </Button>
              <Button variant="contained" onClick={() => setDialogOpen(true)}>
                Open Dialog
              </Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Form Controls
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField label="Name" variant="outlined" />
              <Select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value as string)}
                displayEmpty
                size="small"
              >
                <MenuItem value="one">One</MenuItem>
                <MenuItem value="two">Two</MenuItem>
                <MenuItem value="three">Three</MenuItem>
              </Select>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Cards & Lists
            </Typography>
            <Stack direction="row" spacing={2}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h6">Card title</Typography>
                  <Typography variant="body2">This is an example card content.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Action</Button>
                </CardActions>
              </Card>

              <List sx={{ width: 300 }}>
                <ListItem>
                  <Avatar sx={{ mr: 2 }}>A</Avatar>
                  <ListItemText primary="List item one" secondary="Secondary text" />
                </ListItem>
                <ListItem>
                  <Avatar sx={{ mr: 2 }}>B</Avatar>
                  <ListItemText primary="List item two" secondary="More details" />
                </ListItem>
              </List>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Form Extras
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Checkbox defaultChecked />
              <Switch defaultChecked />
              <Slider defaultValue={30} sx={{ width: 200 }} />
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Misc
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <CircularProgress />
              <Chip label="Example Chip" />
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="#">Home</Link>
                <Link color="inherit" href="#">Catalog</Link>
                <Typography color="text.primary">Item</Typography>
              </Breadcrumbs>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Accordion
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>Summary</AccordionSummary>
              <AccordionDetails>
                <Typography>This is the accordion details content.</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Tabs
            </Typography>
            <Tabs value={tab} onChange={(_, v) => setTab(v)}>
              <Tab label="Tab One" />
              <Tab label="Tab Two" />
              <Tab label="Tab Three" />
            </Tabs>
          </Box>
        </Stack>
      </Container>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        message="This is a snackbar"
      />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>This is a sample dialog.</DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={() => setDialogOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

Showcase.storyName = 'Material Components Showcase'
