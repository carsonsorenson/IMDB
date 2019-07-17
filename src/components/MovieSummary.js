import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {Text, H3 } from 'native-base';

import styles from '../styles/ListStyles';

export default class MovieSummary extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity 
                onPress={() => this.props.movieClicked(this.props.val.getId())}
            >
                <View style={styles.listContainer}>
                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image}
                            source={{ uri: this.props.val.getImage()}}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <H3 note numberOfLines={2}> 
                            {this.props.val.getTitle()} 
                        </H3>
                        <Text>
                            {this.props.val.getReleaseDate()}
                        </Text> 
                        <Text> 
                            Popularity: {this.props.val.getPopularity()} 
                        </Text>
                        <Text note numberOfLines={3}> 
                            {this.props.val.getOverview()} 
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}