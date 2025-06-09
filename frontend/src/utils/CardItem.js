import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const CardItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
}));
export default CardItem;