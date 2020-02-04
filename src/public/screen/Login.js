import React, { Component } from 'react'
import { StyleSheet, View, AsyncStorage} from 'react-native';
import { Content, Text, Button, Form, Label, Input, Item} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';

class Login extends Component {

constructor() {
    super ();

    this.state= {
        email : '',
        password : '',
        userData : {}
    }
}



handleEmail= text => {
       this.setState ({
           email : text
       })
    };

handlePassword =(text) => {
    this.setState({
        password : text
    })}
    
    render() {
        return (
            <Content style={styles.container}>
                <Row>
                    <Grid>
                        <Row style={styles.row}>
                            <Content style={{ marginLeft: 20, marginTop: 40 }}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold' }}> Welcome </Text>
                                <Form style={{ width: 300 }}>
                                    <View>
                                        <Item floatingLabel>
                                        <Label><Icon name='envelope' style={{fontSize:20}}/> Email</Label>
                                            <Input  
                                                onChangeText={this.handleEmail}
                                            />
                                        </Item>
                                        <Item floatingLabel>
                                            <Label><Icon name='key' style={{fontSize:20}}/> Password</Label>
                                            <Input  
                                                onChangeText={this.handlePassword}
                                            secureTextEntry/>
                                        </Item>
                                    </View>
                                    <Button bordered style={styles.btnSubmit}
                                        // onPress={()=> this.props.navigation.navigate('HomeScreen')}
                                        onPress={this.setValue}
                                        >
                                        <Text> Sign In</Text>
                                    </Button>
                                    <Text style={styles.text}>Forgot password ?</Text>
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
        backgroundColor: '#f4eec7',
        paddingTop: 0
    },
    textInput : {
        borderBottomWidth: 1.0,
        margin: 0
    },
    text : {
        textAlign: 'center', 
        marginTop: 5 
    }
})

export default Login