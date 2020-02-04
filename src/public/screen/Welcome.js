import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-native-easy-grid'

export default class Welcome extends Component {
    render() {
        return (
            <Grid>
                <Row  style={{backgroundColor:'red'}}>
                </Row>
                <Row  style={{backgroundColor:'blue'}}>
                </Row>
            </Grid>
        )
    }
}
