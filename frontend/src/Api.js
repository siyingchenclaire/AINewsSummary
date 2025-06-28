// Basic JS (or React useEffect)
import axios from 'axios';

// get Starter data
export async function getnews(){
  const response = await axios.get('http://localhost:5000/getnews');
  return response.data;
};

export async function sign_up(){
  const response = await axios.post('http://localhost:5000/sign_up');
  return response.data;
};

export default {
  getnews,
  sign_up
};