import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen/HomeScreen';
import History from './History/History';


const RootNavigator = DrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  History: {
    screen: History,
  },
});

export default RootNavigator;
