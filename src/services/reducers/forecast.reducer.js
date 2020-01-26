const INITIAL_STATE = {
  forecast: [],
  city: '',
  state: '',
  weather: {},
};

export const ForecastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_FORECASTS':
      return {
        ...state,
        forecast: action.payload.forecast
      };
    case 'GET_WEATHER_NOW':
      return {
        ...state,
        city: action.payload.city,
        state: action.payload.state,
        weather: action.payload.weather,
      };
    default:
      return state;
  }
};
