import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import {
    Text,
    Card,
    Content,
} from 'native-base';
import moment from 'moment';
import { Grid, Col } from 'react-native-easy-grid'
import Icon from 'react-native-vector-icons/FontAwesome';
class CardMap extends Component {

    render() {
        const { title, image, price, cardPress } = this.props
        const infodate = new Date(this.props.date)
        const date = moment(infodate).utc(false).format("DD MMMM")
        return (
            <Card style={styles.card} transparent>
                <Grid>
                    <Col size={2}>
                        <Image source={{ uri: image }} style={styles.cardImage} />
                    </Col>
                    <Col size={4}>
                        <Text style={styles.info}>
                            {date}
                        </Text>
                        <Text style={styles.title} onPress={cardPress}>
                            {title.length > 13 ?
                                title.substring(0, 20) + '...'
                                :
                                title
                            }
                        </Text>
                        <Content style={{marginTop:10}}>
                            <Text style={styles.info}> 
                                <Icon name= 'map-marker' style={styles.icon}  size={20}/>
                                <Text>  </Text>
                                {/* {address} */}
                                Gelora Bung Karno
                            </Text>
                        </Content>
                    </Col>
                </Grid>
            </Card>
        )
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight:'bold',
        marginBottom: 0,
        color: "#FF5555",
        borderRadius: 20,
        marginLeft: 20,
        marginTop : 10
    },
    info: {
        marginLeft: 20,
        marginTop : 5
    },
    cardImage: {
        height: 100,
        flex: 1,
        borderRadius: 20,
    },
    card: {
        borderColor: '#ffff',
        marginBottom:30

    },
})


export default CardMap