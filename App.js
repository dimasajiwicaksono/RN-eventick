import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet} from 'react-native'

import CategoryEvent from './src/public/screen/CategoryEvent';
import HomeScreen from './src/public/screen/HomeScreen';
import DetailEvent from './src/public/screen/DetailEvent';
import Checkout from './src/public/screen/Checkout';
import Ticket from './src/public/screen/Ticket';
import Login from './src/public/screen/Login';
import Register from './src/public/screen/Register';
import Welcome from './src/public/screen/Welcome';

const AppNavigator = createStackNavigator(
  {
  HomeScreen: {
    screen: HomeScreen,
    
  },
  Login : {
    screen:Login,
    navigationOptions : {
      title:'Login',
      header: false
    }
  },
  Register : {
    screen:Register,
    navigationOptions : {
      title:'Register',
      header: false
    }
  },
  Welcome : {
    screen:Welcome,
    navigationOptions : {
      header: false
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
      title: ''
    }
  }

}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
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