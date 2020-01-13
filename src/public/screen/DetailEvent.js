import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Content,
    Card,
    CardItem,
    Text,
    Button,
    Tabs,
    Tab,
    TabHeading
} from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import axios from 'axios';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';


import Description from '../component/DetailEVentTab/Description'
import Review from '../component/DetailEVentTab/Review'


class DetailEvent extends Component {
    constructor() {
        super();
        this.state = {
            event: [],
            categoryName: '',
            num: 1,
            backgroundColor: '#ffff',
        }
    }


    handlePressDecreament = () => {
        if (this.state.num > 1) {
            this.setState({
                num: this.state.num - 1
            })
        }
    }


    handlePressIncreament = () => {
        if (this.state.num < 10 ) {
        this.setState({
            num: this.state.num + 1
        })} else {
            alert('Maaf Terlalu banyak Anda Memesan Tiket')
        }
    }


    handlePressCheckout = () => {
        alert(this.state.num)
    }


    componentDidMount() {
        const { navigation } = this.props
        const id = JSON.stringify(navigation.getParam('id', 'default value'))
        axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/event/${id}`)
            .then(res => {
                this.setState({
                    event: res.data,
                    categoryName: res.data.category.name
                })
            })
            .catch(err => { console.log(err) })
    }
    render() {
        const { title, price, img, description, startTime, endTime } = this.state.event
        const date = moment(startTime).utc(false).format("DD MMMM YYYY")
        const timeStart = moment(startTime).utc(false).format("HH:mm")
        const timeEnd = moment(endTime).utc(false).format("HH:mm")
        return (
            <Content style={styles.root}>
                <Card>
                    <CardItem cardBody>
                        <Image source={{ uri: img }}
                            style={styles.img} 
                            />
                    </CardItem>
                    <CardItem style={styles.cardbody}>
                        <Grid >
                            <Row style={{justifyContent:'center'}}> 
                            <Text style={styles.title}>
                                {title}
                            </Text></Row>
                            <Row style={{marginTop:20}}>
                                <Col>
                                <Text style={styles.textTotal}>
                                    {this.state.num} Tickets
                                </Text></Col>
                                <Col>
                                <Text style={styles.textTotal}>
                                Rp {this.state.num * price}
                                </Text></Col>
                            </Row>
                        </Grid>
                    </CardItem>
                    <CardItem style={styles.cardBodyButton}>
                        <TouchableOpacity
                            style={styles.buttonSection}
                            onPress={this.handlePressDecreament}>
                            <Text style={styles.Text}>
                                <Icon name='minus'/>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                        onPress={()=> this.props.navigation.navigate('Checkout')}>
                            <Text style={{fontSize:18, color:'#fff', fontWeight:'bold'}}>
                                Buy Now
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonSection}
                            onPress={this.handlePressIncreament}>
                            <Text style={styles.Text}>
                            <Icon name='plus'/>
                            </Text>
                        </TouchableOpacity>
        
                    </CardItem>
                    <Tabs tabBarUnderlineStyle={{backgroundColor:'#ff7315'}}>
                        <Tab heading = { 
                            <TabHeading 
                                style={{backgroundColor:'#ffff'}}>
                                <Text >Detail</Text>
                            </TabHeading>}>
                            <Description 
                                />
                        </Tab>
                        <Tab heading = {
                            <TabHeading
                                style={{backgroundColor:'#ffff'}}><Text>Review</Text></TabHeading>}>
                            <Review />
                        </Tab>
                    </Tabs>
                </Card>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#ffff'
    },
    img : { 
        height: 200,
        width: null, 
        flex: 1,
        borderRadius:20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems:'center'
    },
    cardbody: {
        backgroundColor: '#ffff',
    },
    cardBodyButton : {
        marginTop:0, 
        height:70}
    ,
    titleDescription: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "rgba(0,0,0,0.54)"
    },
    description: {
        fontSize: 16,
        color: "rgba(0,0,0,0.54)",
        textAlign: 'justify'
    },
    bodyDescription: {
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    button: {
        backgroundColor: "#ff7315",
        borderRadius: 50,
        justifyContent: 'center',
        height: 50,
        width: "50%",
        marginLeft:10,
        marginRight:10,
        marginTop:0,
        alignItems: 'center'
    },
    buttonSection: {
        width: '20%',
        height: '130%',
        borderRadius: 60,
        justifyContent: 'center',
        backgroundColor: '#f6f4e6',
    },
    Text: {
        fontSize: 20,
        textAlign:'center'
    },
    bodyTextTotal : {
        display:'flex',
        flexDirection: 'row',
    },
    textTotal: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20
    },
    tabs : {
        backgroundColor:'#ffff'
    },
})

export default DetailEvent