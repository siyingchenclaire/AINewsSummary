import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BoltIcon from '@mui/icons-material/Bolt';
import Grid from '@mui/material/Grid';
import CardItem from '../utils/CardItem'

const stats=[{
    "insight-value":127,
    "insight-label":"Articles Today",
    "insight-change":0.15
},{
    "insight-value":18,
    "insight-label":"Critical Alerts",
    "insight-change":3
},{
    "insight-value":0.85,
    "insight-label":"Avg Relevance",
    "insight-change":-15.82
},{
    "insight-value":42,
    "insight-label":"Companies Tracked",
    "insight-change":null
}];
function format(number){
    if(number % 1 !== 0){
        if(number >= 1) return number >= Math.floor(number) + 0.5? Math.ceil(number).toString(): Math.floor(number).toString()
        else if(number >= 0 && number < 1) return number * 100 + '%'
        else if(number < 0 && number > -1) return number  * 100 + '%'
        else return number >= Math.floor(number) + 0.5? Math.ceil(number).toString(): Math.floor(number).toString()
    }else return number.toString()
}

export default function Report() {
  return (
      <>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '32px'
        }}>
            <Box sx={{textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom sx={{fontWeight: 500}}>Intelligence Reports</Typography>
                <Typography variant="subtitle1" gutterBottom color="textSecondary">AI-generated analysis and trend reports</Typography>
            </Box>
            <Button variant="contained" size="large" startIcon={<BoltIcon />}>
                Generate Report
            </Button>
        </Box>

        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 16 }} sx={{marginBottom: '24px'}}>
            {stats.map(stat => (
                <Grid size={4}>
                    <CardItem sx={{}}>
                        <Typography variant="h5" gutterBottom color="textPrimary" sx={{fontWeight: 500}}>{stat['insight-value']}</Typography>
                        <Typography variant="subtitle2" gutterBottom color="textSecondary">{stat['insight-label']}</Typography>
                        {stat['insight-change'] && stat['insight-change'] > 0?
                        (<Typography variant="subtitle2" gutterBottom color="success">+{format(stat['insight-change'])} from yesterday</Typography>):
                        (!stat['insight-change']?(<Typography variant="subtitle2" gutterBottom color="textSecondary"><br/></Typography>):
                        (<Typography variant="subtitle2" gutterBottom color="error">{format(stat['insight-change'])} from yesterday</Typography>))}
                    </CardItem>
                </Grid>
            ))}
        </Grid>
      </>
  );
}