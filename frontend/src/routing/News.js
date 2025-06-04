import { useState } from "react";
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import CardItem from "../utils/CardItem";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function News(){

  const messageList=[
    {
      'is_user': true,
      'message': "Hi!",
      'list_cards': false,
      'cards': null,
    },
    {
      'is_user': false,
      'message': "Hi, how can I assist you today?",
      'list_cards': false,
      'cards': null,
    },
    {
      'is_user': true,
      'message': "Give me today's news summary!",
      'list_cards': false,
      'cards': null,
    },
    {
      'is_user': false,
      'message': null,
      'list_cards': true,
      'list_cards_title': "Today's News Summary",
      'cards': [{'title': 'South Korea Elects Liberal Opposition Leader Lee Jae-myung as President', 'description': 'Lee Jae-myung has been elected as South Korea’s new president, marking a significant political shift in the country.', 'source': 'The Times of India'},
        {'title': 'Elon Musk Criticizes Trump’s Tax Bill; Immigration Crackdown Intensifies', 'description': 'Elon Musk called President Trump’s new tax and spending bill a “disgusting abomination.” Meanwhile, ICE detained the family of a Colorado suspect, and the administration rescinded emergency abortion care protections.', 'source': 'The Guardian'},
        {'title': 'OECD Cuts U.S. Growth Outlook Amid Market Gains', 'description': 'Despite the OECD lowering its U.S. growth forecast, the Nasdaq moved higher, led by gains in chip stocks.', 'source': 'The Wall Street Journal'}],
    },
  ]
  return (
    <>
      {
        messageList.map(messageJSON => (
          <Box sx={{
            display:"flex", 
            flexDirection:`${messageJSON['is_user']?'row-reverse':'row'}`,
            alignItems: 'flex-start'}}>
            <Box>
              {messageJSON['is_user']? 
                (<AccountCircleIcon fontSize="large" sx={{m:"10px"}}/>)
                :
                (<DonutSmallOutlinedIcon fontSize="large" sx={{m:"10px"}}/>)
              }
            </Box>
            {!messageJSON['list_cards']?
            (
              <CardItem variant="outlined" sx={{mt:"10px", p:"8px 16px", lineHeight:"150%", bgcolor:"#D9D9D9", border:0}}>
                <Typography variant="body1" gutterBottom color="textPrimary">
                  {messageJSON.message}
                </Typography>
              </CardItem>
            )
            :
            (
              <Box sx={{textAlign:"left", mt:"10px"}}>
                <Typography variant="h5" gutterBottom sx={{}}>
                  {messageJSON['list_cards_title']}
                </Typography>
                {messageJSON['cards'].map(card => (
                  <CardItem variant="outlined" sx={{textAlign:"left", mb:"10px"}}>
                    <Typography variant="h6" gutterBottom color="" sx={{}}>
                      {card['title']}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{}}>
                      {card['source']}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{}}>
                      {card['description']}
                    </Typography>
                  </CardItem>
                ))}
              </Box>
            )}
          </Box>
        ))
      }
      <TextField label="" variant="outlined" multiline
      sx={{position:"fixed", bottom:"20px", left:"20%", width:"80%", bgcolor:"#FFF"}}
      />
    </>
  );
};
  