import React, { Component } from 'react'
import {
    Content,
    Text,
    Button,
    Item,
    Input,
    ListItem,
    Thumbnail,
    Left,
    List

} from 'native-base'
import { StyleSheet } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';



class Review extends Component {

    constructor() {
        super();

        this.state = {
            comment : '',
        }
    }    

    render() {
        return (
            <Content>
                <Grid style={styles.body}>
                    <Row size ={1}>
                        <Col>
                            <List>
                                <ListItem avatar style={styles.item}>
                                    <Left>
                                        <Thumbnail style={styles.thumbnail} source={{ uri: 'https://usercontent2.hubstatic.com/10577727.png' }} />
                                    </Left>
                                </ListItem>
                            </List>
                        </Col>
                        <Col>
                            <Row>
                                <Text>Dimas Aji Wicaksono</Text>
                            </Row>
                            <Row>
                                <Text>
                                    <Icon name="star" size={20} color="black" />
                                    <Icon name="star" size={20} color="black" />
                                    <Icon name="star" size={20} color="black" />
                                    <Icon name="star" size={20} color="black" />
                                    <Icon name="star" size={20} color="black" />
                                </Text>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Item regular style={styles.input}>
                            <Input
                                placeholder='comment'
                                onChangeText = {(comment) => {this.setState({comment})} }Textbox />
                            {/* <Icon name ='comment' size = {40} /> */}
                        </Item>
                    </Row>
                    <Row>
                        <Button
                            style={styles.button} >
                            <Text>Send</Text>
                        </Button>
                    </Row>

                    {/* comment List  start*/}
                    
                    {/* comment List  End*/}
                </Grid>
            </Content>
        )
    }
}

const styles = StyleSheet.create ({
    body : {
        marginTop : 20,
    },
    
    input : { 
        width: 300, 
        marginRight: 10,
        marginLeft: 20,
        paddingLeft: 10
    },
    button : { 
        left: 250, 
        marginTop: 10,
        borderRadius : 12,
        backgroundColor: 'red'
    },
    item : {
        justifyContent: "center",
        alignContent:'center',
        textAlign:'center',
    },
    thumbnail : {
        marginTop: -10, 
        marginBottom: 10
    }
    
})


export default Review;