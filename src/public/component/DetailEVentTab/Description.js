import React, { Component } from 'react'
import {
    Container,
    Content,
    Text,
    Body
} from 'native-base'

import { StyleSheet } from 'react-native'

class Description extends Component {
    
    render() {
    
        return (
            <Content>
                <Text style={styles.title}>
                    Event Description
                </Text>
                <Content style={styles.text}>    
                    <Text style={{marginBottom:10}} >
                        Kisah zaman dahulu kala hidup sebuah
                        keluarga miskin di pedalaman pesisir pantai utara
                        jawa barat
                    </Text>
                    <Text>
                        Date : {this.props.data}
                    </Text>
                    <Text>
                        Time : 20.00 s.d. 23.00 WIB
                    </Text>
                    <Text>
                        Venue : Jl KH Akhmad Dahlan C.31 Rt 2 Gelora
                                Bung Karno 
                    </Text>
                </Content>


            </Content>
        )
    }
}

const styles = StyleSheet.create ({
    title : {
        textAlign:'center', 
        marginTop:20,
        fontSize:20,
        fontWeight:'bold'
    },
    text : {
        margin:30
    }
})

export default Description
