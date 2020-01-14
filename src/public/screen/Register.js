import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Content, Text, Button, Form, Label, Input, Item} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends Component {

    state = {
        icon : 'eye-slash',
        password: true
    };

    // _changeIcon=()=> {
    //     this.setState(prevState => ({
    //         icon : prevState.icon === 'eye' ? 'eye-slash' : 'eye',
    //         password: !prevState.password
    //     }));
    // }
    render() {
        // const {label, icon, onChange } = this.props
        return (
            <Content style={styles.container}>
                <Row>
                    <Grid>
                        <Row style={styles.row}>
                            <Content style={{ marginLeft: 20, marginTop: 40 }}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 0 }}>Create Account</Text>
                                <Form style={{ width: 300 }}>

                                    <Item floatingLabel>
                                        <Label><Icon name='user' style={{ fontSize: 20 }} /> Full Name</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label><Icon name='user' style={{ fontSize: 20 }} /> Username</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label><Icon name='envelope' style={{ fontSize: 20 }} /> Email</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label><Icon name='key' style={{ fontSize: 20 }} /> Password</Label>
                                        <Input secureTextEntry/>
                                        
                                    </Item>
                                    <Button style={styles.btnSubmit}>
                                        <Text> Submit</Text>
                                    </Button>
                                    <Text style={{ textAlign: 'center', marginTop: 20 }}>Already have an account Sign In</Text>
                            
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
    row: {
        height: 610,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        top: 120,
        flex: 1,
        backgroundColor: '#ffff'
    },
    container: {
        backgroundColor: '#f4eec7'
    }
})
export default Register;