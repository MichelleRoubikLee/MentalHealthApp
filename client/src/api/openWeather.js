import axios from 'axios';
import API_WEATHER_KEY from '../config/default';

export default axios.create({
  baseURL: "api.openweathermap.org/data/2.5/weather?zip={zip code},us&appid={API_WEATHER_KEY}"
})