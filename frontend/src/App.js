import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routing/Home';
import About from './routing/About';
import Test from './routing/Test';
import './App.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;
const routing = {
  'News Feed':{
    'routing': '/',
    'logo': 'feed.svg'
  },
  'Subscription':{
    'routing': '/',
    'logo': 'subscription.svg'
  },
  'Reports':{
    'routing': '/',
    'logo': 'report.svg'
  },
  'Intelligence Cards':{
    'routing': '/',
    'logo': 'intelligence.svg'
  }
}
const topics = {
  'Artificial Intelligence':'',
  'Semiconductors':'',
  'Cloud Computing':'',
  'Cybersecurity':''
}

function App() {
  return (
    <Box className="App" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ 
          width: `100%`, 
          margin: '0',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor:'#0d47a1',
        }}
      >
        <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Icon sx={{marginRight:'20px'}}>
              <img src='pulse.svg' />
            </Icon>
            <Typography variant="h6" noWrap component="div">
              Tech Pulse AI
            </Typography>
          </Box>
          <Box sx={{display: 'flex', }}>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
              variant="outlined"
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search bar' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <AccountCircleIcon />
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
        </Toolbar>

        <Divider />

        <List>
          {Object.keys(routing).map((key, index) => (
            <ListItem key={key} disablePadding>
              <ListItemButton 
                href={routing[key].routing} 
                variant="outlined" 
                size="large" 
                sx={{width: drawerWidth}}
              >
                <ListItemIcon>
                    <img src={routing[key].logo} />
                </ListItemIcon>
                <ListItemText primary={key} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List
          subheader={<ListSubheader sx={{display: 'flex' }}>Topics</ListSubheader>}
        >
          {Object.keys(topics).map((text, index) => (
            <ListItem key={text} sx={{
              border:1, 
              borderColor: 'grey.300', 
              marginLeft: "15px", 
              marginRight: "15px",
              marginTop: "5px",
              marginBottom: "5px",
              borderRadius: '10px',
              width: `calc(${drawerWidth}px - 30px)`
            }} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, 
          bgcolor: 'background.default', 
          p: 3,  
          width: `calc(100% - ${drawerWidth}px)`, 
          ml: `${drawerWidth}px`
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
