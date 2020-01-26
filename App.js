import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Api from './src/services/api';
import Header from './src/components/header/';
import moment from 'moment';
import { Provider } from 'react-redux';
import store from './src/services/store';

const App = () => {
  const [data, setData] = React.useState({});
  useEffect(() => {
    Geolocation.getCurrentPosition(async info => {
      const response = await Api.getGeoForecast(info.coords);
      setData(response);
    })
  }, [])


  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor='transparent' />
      <SafeAreaView>
        <Header temp={4} city={data.name} />
        <View>
          <Text>Hoje</Text>
          <Text>Semana</Text>
        </View>

        <ScrollView>
          {data.data && data.data.map(day => (
            <>
              <Text>{day.date_br}</Text>
              <Text>min {day.temperature.min}</Text>
              <Text>max {day.temperature.max}</Text>
              <Text>chuva {day.rain.probability} %</Text>
            </>
          ))}
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
