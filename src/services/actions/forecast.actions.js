import Api from '../api';

export const getForecast = () => {
  return async dispatch => {
    try{
      const forecast = await Api.getGeoForecast();

      dispatch({type: 'GET_FORECAST', payload: {forecast: forecast.data[0]}});
    }catch(erro) { throw erro }
  }
}

export const getWeatherNow = () => {
  return async dispatch => {
    try{
      const weather = await Api.getWeatherNow();
      const { city, data, state} = weather;

      dispatch({
        type: 'GET_WEATHER_NOW', payload: { city, weather: data, state },
      });
    } catch (erro) { throw erro }
  }
}
