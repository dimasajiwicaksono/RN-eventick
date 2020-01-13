import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import {
    Text,
    Button,
    Input,
    Content
} from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'

class Checkout extends Component {

    handlePress = () => {
        this.props.navigation.navigate('Ticket')
    }

    render() {
        return (
            <Content >
            <Grid style={styles.mainContainer}>
                <Row style={{ alignContent:'center', marginTop:30 }}>
                    <Col size={1} ><Text>Image</Text></Col>
                    <Col size={2} >
                        <Text style={styles.text}>LIVE CONCERT RAISA IN JAKARTA 2020</Text>
                        <Text>GELORA BUNG KARNO</Text>
                        <Text style={styles.text}>20 JUNI 2020</Text>
                    </Col>
                </Row>
                <Row  style={{flexDirection: 'column', height:250, marginTop:20, marginBottom:20}}>
                    <Col style={styles.col}>
                        <Row size={4}><Text>Ticket</Text></Row>
                        <Row size={2}><Text style={styles.text}> 2 Ticket</Text></Row>
                    </Col>
                    <Col style={styles.col}>
                        <Row size={4}><Text>Price</Text></Row>
                        <Row size={2}><Text style={styles.text}>Rp 200000</Text></Row>
                    </Col>
                    <Col style={styles.col}>
                        <Row size={4}><Text>Sub Total</Text></Row>
                        <Row size={2}><Text style={styles.text}>Rp 400000</Text></Row>
                    </Col>
                    <Col style={styles.col}>
                        <Row size={4}><Text style={{ fontWeight: 'bold', fontSize:20 }}>Total Amount</Text></Row>
                        <Row size={2}><Text style={{ fontWeight: 'bold', fontSize:20 }}>Rp 400000</Text></Row>
                    </Col>
                </Row>
                
                <Row style={{ flexDirection: 'column' }}>

                    <Col style={styles.col}>
                        <Row size={4}>
                            <Input
                                placeholder="Enter Coupon Code"/>
                        </Row>
                        <Row size={2}>
                            <Button style={styles.btnApply}>
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

