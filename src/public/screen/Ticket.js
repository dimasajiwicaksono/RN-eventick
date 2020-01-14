import React, { Component } from 'react'
import {
    Content,
    Text,
    Card,
    Container,
    CardItem,
    Button,
    Toast

} from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid';
import { StyleSheet, Image,TouchableOpacity } from 'react-native';


class Ticket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'blue'
        };
    }

    handlePress = () => {
        alert ('confirmasi')
    }

    render() {
        return (

            <Grid>
                <Content style={{ marginLeft: 30, marginBottom: 0 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Your Ticket</Text>
                    <Text>Recieve your ticket</Text>
                </Content>
                <Row size={2} style={styles.root}>
                    <Card style={styles.cardTitle}>
                        <Text style={{ color: 'white', marginLeft: 30, marginTop: 20 }}>
                            MUSIC
                            </Text>
                        <Text style={styles.textTitle}>
                           KERONCONG NATION : NOSTALGIA MEMBAWA PERUBAHAN
                            </Text>
                        {/* <Text style={{ color: 'white', marginLeft: 30 }}>
                            Charlie Puth
                            </Text> */}
                    </Card>
                </Row>

                <Row size={4} style={{
                    backgroundColor: 'white',
                    justifyContent: 'center'
                }}>
                    <Card style={styles.card}>

                        <Grid >
                            <Row style={styles.row}>
                                <Col size={2}>
                                    <Text>Date</Text>
                                    <Text>15 January 2020</Text>
                                </Col>
                                <Col size={1}>
                                    <Text>Time</Text>
                                    <Text>8.00 PM</Text>
                                </Col>
                            </Row>
                            <Row style={styles.row}>
                                <Col >
                                    <Text style={styles.textInfo}>Gate</Text>
                                    <Text style={styles.text}>26</Text>
                                </Col>
                                <Col >
                                    <Text style={styles.textInfo}>Row</Text>
                                    <Text style={styles.text}>05</Text>
                                </Col>
                                <Col>
                                    <Text style={styles.textInfo} >Seat</Text>
                                    <Text style={styles.text}>22</Text>
                                </Col>
                            </Row>
                            <Row style={styles.row}>
                                <Image source={{ uri: 'http://www.pngmart.com/files/10/Barcode-PNG-Clipart.png' }}
                                    style={styles.img}
                                />
                            </Row>
                            <TouchableOpacity 
                                style={styles.button}
                                onPress={this.handlePress}>
                                <Text style={{fontSize:20, color:'white'}}>
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </Grid>
                    </Card>
                </Row>
            </Grid>

        )
    }
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center'
    },
    rootTitle: {
    },
    row: {
        borderRadius: 20,
        width: 300,
        justifyContent: 'center',
    },
    card: {
        height: 320,
        flex: 0.9,
        // borderRadius:20, 
        alignItems: 'center',
    },
    cardTitle: {
        height: 150,
        flex: 0.9,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ff7315',

    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textTitle: {
        fontSize: 25,
        marginLeft: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    textInfo: {
        textAlign: 'center'
    },
    button: {
        borderRadius: 12,
        backgroundColor: '#ff7315',
        marginBottom: 20,
        marginTop: 30,
        paddingTop:10,
        alignItems: 'center',
        height:50,
    },
    img: {
        maxHeight: 50,
        width: 400

    }
})

export default Ticket
