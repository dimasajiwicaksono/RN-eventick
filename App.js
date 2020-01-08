import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoryEvent from './src/public/screen/CategoryEvent';
import HomeScreen from './src/public/screen/HomeScreen';
import DetailEvent from './src/public/screen/DetailEvent';

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'e-Ventick'
    }
  },
  CategoryEvent: {
    screen: CategoryEvent,
    navigationOptions: {
      title: 'Category'
    }
  },
  DetailEvent: {
    screen: DetailEvent,
    navigationOptions: {
      title: 'Detail'
    }
  },
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#232020',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:30
    },
  },
});

export default createAppContainer(AppNavigator);