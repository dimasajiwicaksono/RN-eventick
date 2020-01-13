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
import { Grid, Row, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';



class Review extends Component {
    render() {
        return (

            <Content>
                <Grid>
                    <Row size ={1}>
                        <Col>
                            <List>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={{ uri: 'https://usercontent2.hubstatic.com/10577727.png' }} />
                                        {/* <Icon name="user" /> */}
                                    </Left>
                                </ListItem>
                            </List>
                        </Col>
                        <Col>
                            <Row>
                                <Text>DImas Aji WIcaksono</Text>
                            </Row>
                            <Row>
                                <Text>
                                    <Icon name="star" size={20} color="#900" />
                                </Text>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Item regular style={{ width: 300, marginRight: 10 }}>
                            <Input
                                placeholder='comment'
                                value='' Textbox />
                            {/* <Icon name ='comment' size = {40} /> */}
                        </Item>
                    </Row>
                    <Row>
                        <Button
                            style={{ left: 250, marginTop: 10 }}
                        >
                            <Text>
                                Send
                                </Text>
                        </Button>
                    </Row>
                </Grid>
            </Content>
        )
    }
}



export default Review;