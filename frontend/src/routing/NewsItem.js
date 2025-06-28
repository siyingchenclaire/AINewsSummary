import *  as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CardItem from "../utils/CardItem";
import API from "../Api";

export default function NewsItem(card) {
  const [open, setOpen] = React.useState(false);
  const data = card['card']
  const [news, setNews] = React.useState({});

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: `1000px`, mt:'100px', ml:'40px', mr:'40px', mb:'40px' }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography variant="h5" gutterBottom color="" sx={{}}>
            {news? news[1] : ""}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{}}>
            {news? news[2] : ""}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{}}>
            {news? news[3] : ""}
          </Typography>
    </Box>
  );

  React.useEffect(() => {
    // Triggered on component mount
    API.getnews()
      .then(response => {
        console.log(response[0])
        setNews(response[0])
      })
      .catch(error => {
        console.error('API fetch error:', error);
      });
  }, []);

  return (
    <div>
      <CardItem 
        variant="outlined" 
        sx={{textAlign:"left", mb:"10px"}} 
        onClick={toggleDrawer(true)}
        >
          <Typography variant="h6" gutterBottom color="" sx={{}}>
            {data['title']? data['title'] : ""}
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{}}>
            {data['source']? data['source'] : ""}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{}}>
            {data['description']? data['description'] : ""}
          </Typography>
        </CardItem>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        {DrawerList}
      </Drawer>
    </div>
  );
}