import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,

} from 'react-native'
import {
  Container,
  Button,
  Text,
  Content,
  Input,
  Item,
  Label,

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
      tomorrow: [],
      eventSearch: [],
    }
  }

  static navigationOptions = ({ navigation }) => {
    let headerTitle = 'e-Ventick';
    let headerTitleStyle = { 
        color: '#4d4646', 
        fontSize: 30, 
        fontWeight: 'bold'};

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
      });
  }

  

  renderCategory = ({ item }) => {
    const icon = item.name.toString().toLowerCase()
    const logo = this.state.category
    const object = {id:4, name:'CODE'}
    const index = logo.findIndex(({ name, id }) => name == object.name || id === object.id);

    if (index === -1 ) {
      logo.push(object)
    } else {
      logo[index] = object
    }


    return (
      <Content >
        <Button onPress={this.handlePress(item.id)} 
            style={styles.categoryButton} >
            <Icon name={icon} size={40} style={{color:'white'}}/>
        </Button>
        <Button transparent style={styles.textCategory}>
          <Text style={styles.text}>{item.name}</Text>
        </Button>
      </Content>
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
    console.log(this.state.search)
    return (
      <Container>
        <Content style={styles.body}>
        <Text style={styles.h1}> Hi Dimas  </Text>
          <Text style={styles.h2}> What would you like to find event today ? Search Below  </Text>
          <Item floatingLabel>
              <Label> Search</Label>
              <Icon name='search' style={{ fontSize: 20}} />
                <Input 
                  onChangeText ={this.handleSearch}/>
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
    paddingLeft: 5,
    paddingRight:-5
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
    marginBottom : 5,
    marginLeft: 10,
  },
  categoryButton: {
    fontSize: 10,
    height: 70,
    width: 70,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 9,
    marginLeft: 9,
    backgroundColor: '#ff7315',
    borderRadius: 20
  },
  textCategory : {
    backgroundColor:'transparent',
    justifyContent:'center',
    borderColor: 'transparent',
    
  },
  text : {
    color:'black'
  },
  card: {
    borderRadius: 40,
  },
  btnLogin: {
   
    width: 80,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
   
  },
  search : {
    marginTop : 20,
    marginBottom:20
    
  }

})

export default HomeScreen