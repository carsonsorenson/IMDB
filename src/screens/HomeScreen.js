import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/MainStyles';
import { H1 } from 'native-base';
import MenuBar from '../components/MenuBar';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <MenuBar navigation={this.props.navigation} />
                <View style={styles.main}>
                    <H1>
                        Welcome to MovieMania!
                    </H1>
                </View>
            </View>
        )
    }
}