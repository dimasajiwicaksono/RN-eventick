import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';
import {
    Container,
    Left,
    Body,
    Right,
    Button,
    Text,
    Title,
    Content,
    Icon,
} from 'native-base';
import axios from 'axios';

import CardMapCategories from '../component/CardMapCategories';

class CategoryEvent extends Component {
    constructor() {
        super();
        this.state = {
            events:[],
            name:'',
        }
    }

    async componentDidMount(){
        const { navigation } = this.props
        const id = JSON.stringify(navigation.getParam('id','default value'))

        await axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/category/${id}/events`)
        .then(res =>{
            this.setState({
                name:res.data.name,
                events:res.data
            })
        })
        .catch(err=>{ console.log(err) })
    }

    handleDetail = (value) => () => {
        this.props.navigation.navigate('DetailEvent', { id: value })
    }
    

    renderEvents = ({ item }) => {
        return (
            <CardMapCategories id={item.id} 
                title={item.title} 
                image={item.img} 
                cardPress={this.handleDetail(item.id)} 
                date={item.start_time} 
                price={item.price} />
        )
    }

    render() {
        const {events, name } = this.state
        return (
            <Container style={{justifyContent:'center'}}>
                <Content style={styles.body}>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    <ScrollView>
                        <FlatList
                            data={events}
                            renderItem={this.renderEvents}
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
        padding: 20,
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FF5555",
        marginTop: 20,
        marginBottom: 10
    },
})

export default CategoryEvent