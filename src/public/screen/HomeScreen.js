import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  
  
} from 'react-native'
import {
  Container,
  Button,
  Text,
  Content,
  Input,
  Item,
  Label
  

} from 'native-base';
import axios from 'axios';
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome';


import CardMap from '../component/CardMap'
import CardMapUpcoming from '../component/CardMapUpcoming'



class HomeScreen extends Component {


  constructor() {
    super();
    this.state = {
      category: [],
      date: [],
      tomorrow: []
    }
  }

  static navigationOptions = ({ navigation }) => {
    let headerTitle = 'e-Ventick';
    let headerTitleStyle = { color: '#4d4646', fontSize: 30, fontWeight: 'bold' };
    let headerRight = (
      <TouchableOpacity bordered
        style={styles.btnLogin}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{ }}>Login</Text>
      </TouchableOpacity>)
    return { headerTitle, headerTitleStyle, headerRight }
  }



  async componentDidMount() {

    const date = moment(new Date()).format("YYYY-MM-DD")
    var tomorrow = new Date()
    tomorrow.setDate(moment(tomorrow.getDate()))

    await axios.get('https://dumb-tickapp.herokuapp.com/api/v1/categories')
      .then(res => {
        this.setState({ category: res.data })
      }).catch(err => {
        console.log(err)
      })

    await axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/events/${date}`)
      .then(res => {
        this.setState({ today: res.data })
      }).catch(err => {
        console.log(err)
      })

    await axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/events/${tomorrow}`)
      .then(res => {
        this.setState({ tomorrow: res.data })
      }).catch(err => {
        console.log(err)
      })
  }

  renderCategory = ({ item }) => {
    const categoryName = item.name.toString().toLowerCase();
    // console.log(categoryName)

    return (
      <Button onPress={this.handlePress(item.id)} style={styles.categoryButton} >

        <Text>{item.name}</Text>
      </Button>
    )
  }


  handleDetail = (value) => () => {
    this.props.navigation.navigate('DetailEvent', { id: value })
  }


  renderEventsToday = ({ item }) => {
    return (
      <CardMap style={styles.card}
        id={item.id}
        title={item.title}
        image={item.img}
        cardPress={this.handleDetail(item.id)}
        date={item.start_time}
        price={item.price}
        address={item.address}
      />
    )
  }
  renderEventsUpcoming = ({ item }) => {
    return (
      <CardMapUpcoming style={styles.card}
        id={item.id}
        title={item.title}
        image={item.img}
        cardPress={this.handleDetail(item.id)}
        date={item.start_time}
        price={item.price}
      />
    )
  }



  handlePress = (value) => () => {
    this.props.navigation.navigate('CategoryEvent', { id: value });
  }

  render() {
    return (
      <Container>
        <Content style={styles.body}>
        <Text style={styles.h1}> Hi Dimas  </Text>
          <Text style={styles.h2}> What would you like to find event today ? Search Below  </Text>
          <Item floatingLabel>
              <Label> Search</Label>
              <Icon name='search' style={{ fontSize: 20}} />
                <Input />
          </Item>
          <Text style={styles.title}>
            Find Event
            </Text>
          <ScrollView>
            <FlatList
              data={this.state.category}
              renderItem={this.renderCategory}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </ScrollView>
          <Text style={styles.title}>
            Today
            </Text>
          <FlatList

            data={this.state.today}
            renderItem={this.renderEventsToday}
            horizontal
            showsHorizontalScrollIndicator={false}

          />
          <Text style={styles.title}>
            Coming Event
            </Text>
          <ScrollView>
            <FlatList
              data={this.state.tomorrow}
              renderItem={this.renderEventsUpcoming}
            />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  body: {
  
    padding: 20
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
  },
  h2: {
    fontSize: 20,
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  },
  header: {
    
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#232020",
    marginTop: 20,
    marginBottom: 10
  },
  categoryButton: {
    fontSize: 10,
    height: 50,
    width: 100,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 8,
    marginLeft: 8,
    backgroundColor: '#ff7315',
    borderRadius: 20
  },
  card: {
    borderRadius: 40,
  },
  btnLogin: {
    // backgroundColor: 'transparent',
    width: 80,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    // border:'red'
  },
  search : {
    marginTop : 20,
    marginBottom:20
    
  }

})

export default HomeScreen