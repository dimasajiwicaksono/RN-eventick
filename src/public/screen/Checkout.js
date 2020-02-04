import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import {
    Text,
    Button,
    Input,
    Content,
    Card,
    CardItem,
    Image,
} from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'

class Checkout extends Component {

    constructor() {
        super();
        this.state={
            coupon : ''
        }
    }

    handlePress = () => {
        this.props.navigation.navigate('Ticket')
    }

    handlePressCoupon = () => {
        if (this.state.coupon === 'DISCOUNT') {

        }
    }
    render() {
        const {params} = this.props.navigation.state

        return (
            <Content >
            <Grid style={styles.mainContainer}>
                <Row style={{ alignContent:'center', marginTop:30 }}>
                    <Col size={1} >
                        
                    </Col>
                    <Col size={2} >
                        <Text style={styles.text}>{params.title}</Text>
                        <Text>GELORA BUNG KARNO</Text>
                        <Text style={styles.text}>{params.date}</Text>
                    </Col>
                </Row>
                <Row  style={{flexDirection: 'column', height:250, marginTop:20, marginBottom:20}}>
                    <Col style={styles.col}>
                        <Row size={4}><Text>Ticket</Text></Row>
                        <Row size={2}><Text style={styles.text}> {params.ticketTotal} Ticket</Text></Row>
                    </Col>
                    <Col style={styles.col}>
                        <Row size={4}><Text>Price</Text></Row>
        <Row size={2}><Text style={styles.text}>Rp {params.price}</Text></Row>
                    </Col>
                    <Col style={styles.col}>
                        <Row size={4}><Text>Sub Total</Text></Row>
        <Row size={2}><Text style={styles.text}>Rp {params.total}</Text></Row>
                    </Col>
                    <Col style={styles.col}>
                        <Row size={4}><Text style={{ fontWeight: 'bold', fontSize:20 }}>Total Amount</Text></Row>
        <Row size={2}><Text style={{ fontWeight: 'bold', fontSize:20 }}>Rp {params.total}</Text></Row>
                    </Col>
                </Row>
                
                <Row style={{ flexDirection: 'column' }}>
                    <Col style={styles.col}>
                        <Row size={4}>
                            <Input
                                placeholder="Enter Coupon Code"
                                onChangeText={(coupon)=> this.setState({coupon})}/>
                        </Row>
                        <Row size={2}>
                            <Button style={styles.btnApply}
                                onPress={this.handlePressCoupon}>
                                <Text>Apply</Text>
                            </Button>
                        </Row>
                    </Col>
                    <Col style={styles.col}>
                        <Button style={styles.btnConfirm}
                            onPress={this.handlePress}><Text>Continue to Payment</Text></Button>
                    </Col>
                </Row>
            </Grid>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    total: {
        fontSize: 30,
        marginLeft: 100,
        marginRight: 20
    },
    mainContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    card: {
        width: 300,
        borderRadius: 30
    },
    submit: {
        width: 300,
        borderRadius: 50,
        height: 60,
        marginBottom: 50,
        justifyContent: 'center'
    },
    textSubmit: {
        fontSize: 20,
        textAlign: 'center'
    },
    text : {
        fontWeight:'bold'
    },
    col : {
        flexDirection:'row'
    },
    btnConfirm : {
        width:300, 
        alignContent:'center', 
        alignItems:'center', 
        justifyContent:'center', 
        margin:20,
        borderRadius:12,
        backgroundColor:'#535364'
    },
    btnApply : {
        width:'100%',
        fontWeight:'bold',
        justifyContent:'center',
        borderRadius:8,
        backgroundColor:'#ff971d'
    }
})


export default Checkout

