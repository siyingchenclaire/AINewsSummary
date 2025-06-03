import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

const CardItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
}));

const news = [
  {
    "title": "Amazon's Echo Show 10 Signals Ambient AI Strategy Shift",
    "source": 1,
    "time": "2 hours ago",
    "impact": 1,
    "summary": "Amazon's latest Echo devices emphasize ambient intelligence over voice commands, potentially reshaping the smart home market and challenging Google's Nest ecosystem.",
    "tags": ["Smart Home", "Amazon", "AI Strategy"],
    "strategicImpact": "Market positioning shift",
    "bookmarked": false
  },
  {
    "title": "OpenAI Content Licensing Expands Media Partnerships",
    "source": 2,
    "time": "4 hours ago",
    "impact": 2,
    "summary": "New licensing agreements with major media companies suggest OpenAI is building a sustainable content acquisition strategy, potentially reducing training data risks.",
    "tags": ["OpenAI", "Content Licensing", "Media"],
    "strategicImpact": "Risk mitigation",
    "bookmarked": true
  },
  {
    "title": "Samsung Q1 2024: AI Chip Demand Drives Record Profits",
    "source": 3,
    "time": "6 hours ago",
    "impact": 1,
    "summary": "Samsung's semiconductor division reports 40% profit increase driven by AI chip demand, indicating sustained growth in AI infrastructure spending.",
    "tags": ["Samsung", "Semiconductors", "AI Infrastructure"],
    "strategicImpact": "Market opportunity",
    "bookmarked": false
  },
  {
    "title": "Microsoft Copilot Enterprise Adoption Accelerates",
    "source": "WSJ Tech",
    "time": "8 hours ago",
    "impact": 2,
    "summary": "Enterprise customers are rapidly adopting Microsoft Copilot, with 65% of Fortune 500 companies now in pilot or full deployment phases.",
    "tags": ["Microsoft", "Enterprise AI", "Productivity"],
    "strategicImpact": "Competitive advantage",
    "bookmarked": false
  },
  {
    "title": "Tesla FSD Beta Expands to European Markets",
    "source": "Automotive News",
    "time": "1 day ago",
    "impact": 3,
    "summary": "Tesla's Full Self-Driving beta launches in select European cities, marking a significant regulatory milestone for autonomous vehicle deployment.",
    "tags": ["Tesla", "Autonomous Vehicles", "Regulation"],
    "strategicImpact": "Regulatory progress",
    "bookmarked": false
  },
  {
    "title": "Apple Vision Pro Sales Fall Short of Expectations",
    "source": "MacRumors",
    "time": "1 day ago",
    "impact": 2,
    "summary": "Apple Vision Pro sales figures suggest slower consumer adoption than anticipated, potentially impacting the broader XR market momentum.",
    "tags": ["Apple", "XR/VR", "Consumer Hardware"],
    "strategicImpact": "Market timing",
    "bookmarked": true
  }
]

function Card() {
    const [impact, setImpact] = useState('0');
    const [source, setSource] = useState('0');
    const [time, setTime] = useState('0');
    const [newsList, setNewsList] = useState(news);

    const handleImpactChange = (event) => {
        setImpact(event.target.value);
        if(event.target.value !== '0') setNewsList(news.filter(item => 
            item["impact"].toString() === event.target.value &&
            (source === '0' || item["source"] === source)
        ))
        else setNewsList(news.filter(item => 
            (source === '0' || item["source"] === source)
        ));
    };

    const handleSourceChange = (event) => {
        setSource(event.target.value);
        if(event.target.value !== '0') setNewsList(news.filter(item => {
            console.log(item["source"], event.target.value, item["source"].toString() === event.target.value, impact)
            return item["source"].toString() === event.target.value &&
            (impact === '0' || item["impact"] === impact)
        }))
        else setNewsList(news.filter(item => 
            (impact === '0' || item["impact"] === impact)
        ));
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const filters = {
        "Impact":{
            options: ["All Impact Levels", "Critical", "Moderate", "Low"],
            value: impact,
            onChange: handleImpactChange
        },
        "Source":{
            options: ["All Sources", "TechCrunch", "The Verge", "Bloomberg"],
            value: source,
            onChange: handleSourceChange
        },
        "Time":{
            options: ["Today", "This Week", "This Month"],
            value: time,
            onChange:handleTimeChange

        }
    }

    return (
      <>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '32px'
        }}>
            <Box sx={{textAlign: 'left'}}>
                <Typography variant="h5" gutterBottom sx={{fontWeight: 500}}>Intelligence Cards</Typography>
                <Typography variant="subtitle1" gutterBottom color="textSecondary">AI-generated strategic insights from today's tech news</Typography>
            </Box>
        </Box>

        <Box sx={{display:"flex", justifyContent:"space-between", width:"100%", mb:"20px", alignItems: 'center'}}>
            <Box sx={{display:"flex", justifyContent:"flex-start"}}>
                {Object.keys(filters).map((filter) =>(
                    <FormControl sx={{mr:"20px"}}>
                    <InputLabel>{filter}</InputLabel>
                    <NativeSelect
                        value={filters[filter]['value']}
                        label={filter}
                        onChange={filters[filter]['onChange']}
                        defaultValue={0}
                        variant="filled"
                    >
                        {filters[filter]['options'].map((key, index) => <option value={index}>{key}</option>)}
                    </NativeSelect>
                </FormControl>))}
            </Box>
            <Typography variant="subtitle1" gutterBottom color="textSecondary" >24 cards found</Typography>
        </Box>

        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12}} sx={{}}>
            {newsList.map(newsItem => (
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
                                    {newsItem['title']}
                                </Typography>
                                <Typography variant="caption" gutterBottom color="textDisabled" sx={{fontWeight: "bold"}}>
                                    {newsItem['source']} · {newsItem['time']}
                                </Typography>
                            </Box>
                            <Box sx={{textAlign:"center", width:"20%"}}>
                                {newsItem["impact"] === 1?
                                (<Typography variant="caption" gutterBottom color="error" sx={{bgcolor:" #fee2e2", p: "4px 8px", borderRadius: "12px"}}>
                                    {filters["Impact"]["options"][newsItem["impact"]]}
                                </Typography>):
                                (newsItem["impact"] === 3? 
                                (<Typography variant="caption" gutterBottom color="success" sx={{bgcolor:"#dcfce7", p: "4px 8px", borderRadius: "12px"}}>
                                    {filters["Impact"]["options"][newsItem["impact"]]}
                                </Typography>):
                                (<Typography variant="caption" gutterBottom color="warning" sx={{bgcolor:" #fef3c7", p: "4px 8px", borderRadius: "12px"}}>
                                    {filters["Impact"]["options"][newsItem["impact"]]}
                                </Typography>))}
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{textAlign:"left", p:"20px"}}>
                            <Typography variant="body2" gutterBottom color="textPrimary" sx={{mt:"20px", lineHeight:"175%"}}>
                                {newsItem['summary']}
                            </Typography>
                            {newsItem['tags'].map(tag => (
                                <Typography variant="caption" gutterBottom color="textPrimary" sx={{bgcolor:" #f1f5f9", p: "4px 8px", borderRadius: "12px"}}>
                                    {tag}
                                </Typography>
                            ))}
                        </Box>
                        <Box sx={{textAlign:"left", bgcolor:"#f8fafc", width:"100%", p:"20px"}}>
                            <Typography variant="caption" gutterBottom color="textDisabled" sx={{fontWeight: "bold"}}>
                                Source Impact: {newsItem["source"]}
                            </Typography>
                            <button class="bookmark-btn">🔖</button>
                        </Box>
                    </CardItem>
                </Grid>
            ))}
        </Grid>
      </>
    );
}
export default Card;
  