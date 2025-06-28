import * as React from 'react';
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

export default function NewsItem(card) {
  const [open, setOpen] = React.useState(false);
  const data = card['card']

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: `1000px`, mt:'100px', ml:'40px', mr:'40px', mb:'40px' }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography variant="h5" gutterBottom color="" sx={{}}>
            {data['title']? data['title'] : ""}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{}}>
            {data['source']? data['source'] : ""}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{}}>
            {data['description']? data['description'] : ""}
          </Typography>
    </Box>
  );

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