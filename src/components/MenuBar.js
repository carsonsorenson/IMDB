import React, { Component } from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/MenuBarStyles';

export default class MenuBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.push('SearchPage')}
                >
                    <Text style={styles.menuText}>
                        Go to Search Page
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('BrowsePage')}
                >
                    <Text style={styles.menuText}>
                        Go to Browse Page
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}