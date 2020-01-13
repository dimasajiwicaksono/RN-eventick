import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native'
import {
  Container,
  Button,
  Text,
  Content,
} from 'native-base';
import axios from 'axios';
import moment from 'moment'



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
        this.setState({tomorrow: res.data })
      }).catch(err => {
        console.log(err)
      })
  }

  renderCategory = ({ item }) => {
    const categoryName = item.name.toString().toLowerCase();
    console.log(categoryName)
    
    return (
      <Button onPress={this.handlePress(item.id)} style={styles.categoryButton} >
        {/* <Icon name={categoryName}/> */}
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
      address = {item.address}
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
    console.log(this.state.today)
    console.log(this.state)
    return (
      <Container>
        <Content style={styles.body}>
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
    // backgroundColor: "#F4E1E1",
    padding: 20
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
  card : {
    borderRadius:40,
    // backgroundColor:'#232020'
  }
})

export default HomeScreen