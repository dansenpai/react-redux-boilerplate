import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/services/store';
import AppNavigator from './app-navigator';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor='transparent' />
      <AppNavigator />
    </Provider>
  );
};

export default App;
