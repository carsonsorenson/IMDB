import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {H3, H2 } from 'native-base';

import styles from '../styles/ListStyles';

export default class PersonSummary extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TouchableOpacity 
                onPress={() => this.props.personClicked(this.props.val.getId())}
            >
                <View style={styles.listContainer}>
                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image}
                            source={{ uri: this.props.val.getImage()}}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <H2 numberOfLines={2}> 
                            {this.props.val.getName()} 
                        </H2>
                        <H3></H3>
                        <H3 numberOfLines={1}> 
                            Popularity: {this.props.val.getPopularity()} 
                        </H3>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}