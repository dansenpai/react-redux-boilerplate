import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/home/home';

const AppNavigator = createStackNavigator({
  Home: Home,
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: () => null,
  }
})

export default createAppContainer(AppNavigator);
