import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardItem from "../utils/CardItem";
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import ReportProblemTwoToneIcon from '@mui/icons-material/ReportProblemTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';

const subscriptions = [
    {
      "title": "OpenAI & Competitors",
      "type": "Company Watch",
      "description": "Track all news, funding, product launches, and strategic moves from OpenAI, Anthropic, Google DeepMind, and other AI leaders.",
      "stats": {
        "articles": 127,
        "alerts": 18,
        "relevance": "85%"
      },
      "keywords": ["OpenAI", "Anthropic", "GPT", "Claude", "LLM"],
      "status": "Active"
    },
    {
      "title": "AI Chip Market",
      "type": "Sector Watch",
      "description": "Monitor semiconductor developments, AI chip innovations, supply chain updates from NVIDIA, AMD, Intel, and emerging players.",
      "stats": {
        "articles": 89,
        "alerts": 12,
        "relevance": "92%"
      },
      "keywords": ["NVIDIA", "AMD", "GPU", "AI Chips", "Semiconductors"],
      "status": "Active"
    },
    {
      "title": "Apple Innovations",
      "type": "Company Watch",
      "description": "Stay updated on Apple's product roadmap, AI integrations, Vision Pro developments, and strategic partnerships.",
      "stats": {
        "articles": 56,
        "alerts": 8,
        "relevance": "78%"
      },
      "keywords": ["Apple", "Vision Pro", "iOS", "AR/VR", "Apple Intelligence"],
      "status": "Paused"
    },
    {
      "title": "Enterprise AI Adoption",
      "type": "Trend Watch",
      "description": "Track enterprise AI implementation trends, case studies, ROI reports, and adoption challenges across industries.",
      "stats": {
        "articles": 203,
        "alerts": 31,
        "relevance": "81%"
      },
      "keywords": ["Enterprise AI", "Digital Transformation", "ROI", "Implementation"],
      "status": "Active"
    },
    {
      "title": "Quantum Computing",
      "type": "Technology Watch",
      "description": "Monitor quantum computing breakthroughs, commercial applications, and competitive developments from IBM, Google, and startups.",
      "stats": {
        "articles": 34,
        "alerts": 5,
        "relevance": "73%"
      },
      "keywords": ["Quantum Computing", "IBM", "Google Quantum", "Qubits"],
      "status": "Active"
    },
    {
      "title": "Cybersecurity Threats",
      "type": "Security Watch",
      "description": "Critical security alerts, breach reports, vulnerability disclosures, and defense technology developments.",
      "stats": {
        "articles": 156,
        "alerts": 24,
        "relevance": "88%"
      },
      "keywords": ["Cybersecurity", "Data Breaches", "Vulnerabilities", "Zero-day"],
      "status": "Active"
    }
  ]
const alerts = [
    {
      "level": "high",
      "title": "Major AI Partnership Announced",
      "description": "Microsoft and OpenAI expand partnership with $10B investment commitment",
      "time": "2 hours ago"
    },
    {
      "level": "medium",
      "title": "Samsung Q1 Earnings Beat",
      "description": "Semiconductor division reports 40% profit increase driven by AI chip demand",
      "time": "6 hours ago"
    },
    {
      "level": "low",
      "title": "New Quantum Breakthrough",
      "description": "IBM announces 1000-qubit quantum processor milestone",
      "time": "1 day ago"
    },
    {
      "level": "high",
      "title": "Critical Security Vulnerability",
      "description": "Zero-day exploit discovered in major cloud platform",
      "time": "2 days ago"
    }
  ]

function Subscription() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
      <>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: '32px'
        }}>
            <Box sx={{textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom sx={{fontWeight: 500}}>Subscriptions & Alerts</Typography>
                <Typography variant="subtitle1" gutterBottom color="textSecondary">Customize your intelligence feed with targeted tracking</Typography>
            </Box>
            <Button variant="contained" onclick="openModal()" size="large">
                + Add Subscription
            </Button>
        </Box>

         <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12}} sx={{}}>
            {subscriptions.map(subscription => (
                <Grid size={4}>
                    <CardItem sx={{p:0}} className="intelligence-card">
                        <Box sx={{display:"flex", 
                            flexDirection:"row", 
                            justifyContent: 'space-between',
                            alignItems: "flex-start",
                            p:"20px"
                            }}>
                            <Box sx={{width: "80%"}}>
                                <Typography variant="subtitle1" gutterBottom color="textPrimary" sx={{fontWeight: 500}}>
                                    {subscription['title']}
                                </Typography>
                                <Typography variant="caption" gutterBottom color="textDisabled" sx={{fontWeight: "bold", bgcolor:" #f1f5f9", p:"2px 40px", borderRadius: "12px"}}>
                                    {subscription['type']}
                                </Typography>
                            </Box>
                            <Box sx={{width:"20%"}}>
                                <IconButton aria-label="delete" size="large">
                                    <MoreHorizIcon />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{textAlign:"left", pl:"20px", pr:"20px"}}>
                            <Typography variant="body2" gutterBottom color="textPrimary" sx={{lineHeight:"175%", mb:"20px"}}>
                                {subscription['description']}
                            </Typography>
                            <Box sx={{display:"flex", flexDirection:"row", mb:"20px"}}>
                                {Object.keys(subscription['stats']).map(key => (
                                    <Box sx={{display:"flex",flexDirection:"column", alignItems:'center', mr:'20px'}}>
                                        <Typography variant="h5" gutterBottom color="textPrimary" sx={{fontWeight: 500}}>
                                            {subscription['stats'][key].toString()}
                                        </Typography>
                                        <Typography variant="caption" gutterBottom color="textSecondary" sx={{textTransform: 'uppercase'}}>
                                            {key}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{display: "flex", flexWrap: "wrap"}}>
                                {subscription['keywords'].map(tag => (
                                    <Typography variant="caption" gutterBottom color="info" sx={{bgcolor:" #eef2ff", p: "4px 8px", borderRadius: "12px", mr:"5px", }}>
                                        {tag}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", flexDirection:"row", justifyContent:"space-between", width:"100%", p:"20px"}}>
                            <Switch checked={checked} onChange={handleChange} defaultChecked size="small"/>
                            <Typography variant="body2" gutterBottom color="textSecondary" sx={{lineHeight:"175%"}}>
                            {checked?<>Active</>:<>Paused</>}
                            </Typography>
                        </Box>
                    </CardItem>
                </Grid>
            ))}
        </Grid>

        <Box sx={{textAlign: 'center', mt:"40px"}}>
            <Typography variant="h6" gutterBottom sx={{fontWeight: 500, mb:'16px'}}>Recent Alerts</Typography>
            <Stack sx={{ width: '100%' }}>
            {
                alerts.map(alert => (
                    <CardItem sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        {
                            alert['level'] === 'high'?(<ReportProblemTwoToneIcon color="error" />):(
                                alert['level'] === 'medium'?(<NotificationsActiveTwoToneIcon color="warning" />):(<InfoTwoToneIcon color="success" />)
                            )
                        }
                        <Box sx={{display:"flex", flexDirection:"column", width:"80%"}}>
                            <Typography variant="subtitle2" gutterBottom color="textPrimary" sx={{fontWeight: 500}}>
                                {alert['title']}
                            </Typography>
                            <Typography variant="body3" gutterBottom color="textSecondary" sx={{}}>
                                {alert['description']}
                            </Typography>
                        </Box>
                        <Typography variant="body3" gutterBottom color="textSecondary" sx={{}}>
                            {alert['time']}
                        </Typography>
                    </CardItem>
                ))
            }
            </Stack>
        </Box>
      </>
    );
}
export default Subscription;
  