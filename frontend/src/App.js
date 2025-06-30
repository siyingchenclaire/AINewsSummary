import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import News from './routing/News';
import Subscription from './routing/Subscription';
import Report from './routing/Report';
import Card from './routing/Card';
import Email from './routing/Email';
import Login from './routing/Login';
import Signup from './routing/Signup';
import Reset from './routing/Reset';
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
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const drawerWidth = 240;
const routing = {
  'News Feed':{
    'routing': '/',
    'logo': 'feed.svg'
  },
  'Subscription':{
    'routing': '/subscription',
    'logo': 'subscription.svg'
  },
  'Reports':{
    'routing': '/report',
    'logo': 'report.svg'
  },
  'Intelligence Cards':{
    'routing': '/card',
    'logo': 'intelligence.svg'
  },
  'Email Notification':{
    'routing':'/email',
    'logo':'email.svg'
  }
}
const topics = {
  'Artificial Intelligence':'',
  'Semiconductors':'',
  'Cloud Computing':'',
  'Cybersecurity':''
}

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="App" sx={{ display: 'flex'}}>
      <CssBaseline />
      {/* Top menu */}
      <AppBar
        position="fixed"
        sx={{ 
          width: `100%`, 
          margin: '0',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor:'#27303C',
        }}
      >
        <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <DonutSmallOutlinedIcon sx={{marginRight:'10px'}} fontSize="large"/>
            <Typography variant="h6" noWrap component="div">
              Tech Pulse AI
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '40%'}}>
            <Paper
              component="form"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                width: '100%', 
                marginRight:'10px',
                border:0
              }}
            >
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon/>
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search bar' }}
              />
            </Paper>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <AccountCircleIcon fontSize="large"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{ mt: '50px' }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Side bar */}
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
        containerStyle={{transform: 'none'}}
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

        <Box
          component="footer"
          style={{position:'fixed', bottom:0, left: 0, width:drawerWidth}}
        >
          <Divider sx={{width: '80%', marginLeft: '10%'}}/>
          <Typography sx={{paddingTop:1}} color="textSecondary">PATENT Certificate</Typography>
          <Typography sx={{paddingBottom:2}} fontSize='small' color="textDisabled"><a href="https://siyingchenclaire.github.io/siying.github.io/">Siying Chen</a> @2025</Typography>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1,  
          p: 3,  
          width: `calc(100% - ${drawerWidth}px)`, 
          ml: `${drawerWidth}px`,
          bgcolor: '#FBFBFC',
          mt:'60px'
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/card" element={<Card />} />
            <Route path="/report" element={<Report />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/email" element={<Email />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
