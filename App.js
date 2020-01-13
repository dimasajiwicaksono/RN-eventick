import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Text } from 'native-base'
import { StyleSheet } from 'react-native'

import CategoryEvent from './src/public/screen/CategoryEvent';
import HomeScreen from './src/public/screen/HomeScreen';
import DetailEvent from './src/public/screen/DetailEvent';
import Checkout from './src/public/screen/Checkout';
import Ticket from './src/public/screen/Ticket';


const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'e-Ventick',
      headerRight: () => (
        <Button
          onPress={() => alert('Modal')}
          style={styles.button}>
          <Text style={styles.text}>
            Sign Up
            </Text>
        </Button>
      )
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
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: 'Checkout'
    }
  },
  Ticket: {
    screen: Ticket,
    navigationOptions: {
      title: '',
      headerRight: () => (
        <Button
          onPress={() => alert('Modal')}
          style={styles.button}>
          <Text style={styles.text}>
            Sign Up
            </Text>
        </Button>
      )
    }
  }

}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#232020',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30
    },
  },
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f8f8f8',
    width: 100,
    borderRadius: 50,
    alignContent: 'center',
    marginRight: 20
  },
  text: {
    color: '#2b2b28',

  }
})



export default createAppContainer(AppNavigator);