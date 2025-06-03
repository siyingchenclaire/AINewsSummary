import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function News(){

  const messageList=[
    {
      is_user: true,
      message: 'Hi, how can I assist you today?',
      list_cards: false,
      cards: null,
    },
    {
      is_user: false,
      message: 'Hi, how can I assist you today?',
      list_cards: false,
      cards: null,
    }
  ]
  return (
    <>
      {
        messageList.map((messageJSON, index) => {
          if(messageJSON.is_user){

          }else{

          }
        })
      }
    </>
  );
};
  