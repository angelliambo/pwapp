import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

{/**
  *Mediante Axios realizamos una consulta tipo asincronica a un server publico del clima, 
  solo necesitamos la url y los parametros con los datos que esperan en la consulta
 */}

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    }

  });

  return data;
}