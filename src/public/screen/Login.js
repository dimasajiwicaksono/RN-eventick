import React, { Component } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { Content, Text, Button, Form, Label, Input, Item, Image} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {
    render() {
        return (
            <Content style={styles.container}>
                <Row>
                
                    <Grid>
                        <Row style={styles.row}>
                            <Content style={{ marginLeft: 20, marginTop: 40 }}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold' }}> Welcome</Text>
                                <Form style={{ width: 300 }}>
                                    <Item floatingLabel>
                                        <Label><Icon name='envelope' style={{fontSize:20}}/> Email</Label>
                                        <Input/>
                                    </Item>
                                    <Item floatingLabel>
                                        <Label><Icon name='key' style={{fontSize:20}}/> Password</Label>
                                        <Input secureTextEntry/>
                                    </Item>
                                    <Button bordered style={styles.btnSubmit}
                                        onPress={()=> this.props.navigation.navigate('HomeScreen')}>
                                        <Text> Sign In</Text>
                                    </Button>
                                    <Text style={{ textAlign: 'center', marginTop: 5 }}>Forgot password ?</Text>
                                    <Button style={styles.btnSubmit}
                                        onPress ={() => this.props.navigation.navigate('Register')}>
                                        <Text>
                                            Create Account
                                        </Text>
                                    </Button>
                                </Form>
                            </Content>
                        </Row>
                    </Grid>
                </Row>
            </Content>
        )
    }
}


const styles = StyleSheet.create({
    btnSubmit: {
        borderRadius: 12,
        justifyContent: 'center',
        height: 50,
        marginTop: 30
    },
    row : {
        
        height: 610,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        top: 150,
        flex: 1,
        backgroundColor: '#ffff'
    },
    container : {
        backgroundColor: '#f4eec7' 
    }
})
export default Login