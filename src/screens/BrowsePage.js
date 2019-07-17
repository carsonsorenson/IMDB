import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import movieService from '../services/movie.service';
import MenuBar from '../components/MenuBar';

import styles from '../styles/BrowseStyles';

export default class BrowsePage extends Component {
    static navigationOptions = {
        title: 'BrowsePage'
    }

    constructor(props) {
        super(props)

        this.state = {
            genres: [],
            startPage: 1
        }
    }

    componentDidMount() {
        this.getGenres();
    }

    getGenres() {
        movieService.getMovieGenres()
        .then(results => {
            this.setState({ genres: results });
        })
        .catch(error => {
            console.log('Something went wrong')
        })
    }

    browseMovies(id) {
        movieService.browseGenre(id, this.state.startPage)
        .then(results => {
            this.props.navigation.push('ListPage', { 
                items: results.items,
                id: id,
                type: 'browse',
                totalItems: results.totalItems,
                totalPages: results.totalPages
            }); 
        })
        .catch(error => {
            console.log(error)
        });   
    }

    renderItem = ({item}) => {
        return (
            <View style={styles.genreContainer}>
                <TouchableOpacity 
                    style={styles.largeButton}
                    onPress={() => this.browseMovies(item.getId())}
                >
                    <Text style={styles.genreText}>
                        Browse
                    </Text>
                    <Text style={styles.genreText}>
                        {item.getName()}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderEmptyList = () => {
        return (
            <Text>...</Text>
        )
    }

    renderGenres() {
        return(
            <FlatList
                data={this.state.genres}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={this.renderItem}
                ListEmptyComponent={this.renderEmptyList}
                numColumns={2}
            />
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <MenuBar navigation={this.props.navigation} />
                <Text style={styles.header}>
                    Movie Genres
                </Text>
                {this.renderGenres()}
            </View>
        )
    }
}