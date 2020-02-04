import React, { Component } from 'react'
import {
    Content,
    Text,
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
                        {this.props.description}
                    </Text>
                    <Text>
                        Date : {this.props.date}
                    </Text>
                    <Text>
                        Time : {this.props.time} WIB
                    </Text>
                    <Text>
                        Venue : {this.props.venue}
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
