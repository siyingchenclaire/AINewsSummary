import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardItem from '../utils/CardItem'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';

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

export default function Email() {
  return (
      <>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '32px'
        }}>
            <Box sx={{textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom sx={{fontWeight: 500}}>Subscribe to Our Newsletters</Typography>
                <Typography variant="subtitle1" gutterBottom color="textSecondary">The stories you need to start your day, hand-picked for you every weekday. Plus, the best of AI News Summary every Sunday.</Typography>
            </Box>
        </Box>
            <CardItem sx={{textAlign:"left", width:"75%", margin:"auto"}}>
                <Typography variant="subtitle2" gutterBottom color="textSecondary" sx={{mb:"10px"}}>Select from our newsletters below and enter your email to sign up.</Typography>
                <TextField label="Email" variant="standard" sx={{mb:"10px"}} fullWidth required/>
                <Box sx={{display: 'flex', justifyContent: 'space-between', mb:"10px"}}>
                    <TextField label="First Name" variant="standard" sx={{width:"47%"}} required/>
                    <TextField label="Last Name" variant="standard" sx={{width:"47%"}} required/>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', mb:"10px"}}>
                    <TextField label="Zip Code" variant="standard" sx={{width:"45%"}} required/>
                    <TextField label="Country" variant="standard" sx={{width:"45%"}} required/>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', mb:"10px"}}>
                    <TextField label="Industry" variant="standard" sx={{width:"45%"}}/>
                    <TextField label="Job Type" variant="standard" sx={{width:"45%"}}/>
                </Box>
                <FormControl variant="standard" fullWidth sx={{mb:"10px"}}>
                    <InputLabel id="frequency-label">Frequency</InputLabel>
                    <Select
                        labelId="frequency-label"
                        id="frequency-select"
                    >
                    <MenuItem value={1}>Daily</MenuItem>
                    <MenuItem value={2}>Weekly</MenuItem>
                    <MenuItem value={3}>Biweekly</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" size="large" startIcon={<SendIcon />}  sx={{mt:"10px"}}>
                    Sign up
                </Button>
            </CardItem>
      </>
  );
}