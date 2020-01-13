import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    Text,
    Card,
    CardItem,
    Content,
    Button

} from 'native-base';
import moment from 'moment';
import { Grid, Col, Row } from 'react-native-easy-grid'
import Icon from 'react-native-vector-icons/FontAwesome';

class CardMap extends Component {

    render() {
        const { title, image, cardPress } = this.props
        const infodate = new Date(this.props.date)
        const date = moment(infodate).utc(false).format("DD MMMM")
        return (

            <Card style={styles.card} transparent>
                <Grid>
                    <Row size={2}>
                        <Image source={{ uri: image }} style={styles.cardImage} />
                    </Row>
                    <Col size={4}>
                        <Text style={styles.info}>
                            {date}
                        </Text>
                        <Text style={styles.title} onPress={cardPress}>
                            {title.length > 13 ?
                                title.substring(0, 30) + '...'
                                :
                                title
                            }
                        </Text>
                        <Content style={{marginTop:10}}>
                            <Grid >
                                <Col size={3}style={{ marginLeft:10}}>
                                    <Text style={styles.info}> 
                                        <Icon name= 'map-marker' style={styles.icon}  size={20}/>
                                        <Text>  </Text>
                                        {/* {address} */}
                                        Gelora Bung Karno
                                    </Text>
                                </Col>
                                <Col size={1}>
                                    <TouchableOpacity style={styles.button}
                                        onPress={()=> alert('dibuat per id')}>
                                        <Text style={{paddingTop:5, color:'white', fontWeight:'bold'}}> Buy</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Grid>
                        </Content>
                    </Col>
                </Grid>

            </Card>

        )
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight:'bold',
        marginBottom: 0,
        color: "#FF5555",
        borderRadius: 20,
        // marginLeft: 20
    },
    info: {
        // marginLeft: 20,
        marginTop:10,
    },
    cardImage: {
        height: 200,
        flex: 1,
        borderRadius: 20,
    },
    card: {
        borderColor: '#ffff',
        marginBottom:30
    },
    button : {
        borderRadius : 20,
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#FF5555',
        fontSize:20
    }
})


export default CardMap