import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import MenuBar from '../components/MenuBar';
import styles from '../styles/SearchStyles';
import movieService from '../services/movie.service';

export default class SearchPage extends Component {
    static navigationOptions = {
        title: 'SearchPage'
    }

    constructor(props) {
        super(props)

        this.state = {
            movieSearch: '',
            personSearch: '',
            startPage: 1
        }
    }

    handlePerson(text) {
        this.setState({ personSearch: text });
    }

    handleMovie(text) {
        this.setState({ movieSearch : text });
    }

    searchMovie(page) {
        movieService.searchMovie(this.state.movieSearch, this.state.startPage)
        .then(results => {
            this.props.navigation.push('ListPage', { 
                items: results.items,
                search: this.state.movieSearch,
                type: 'search_movie',
                totalItems: results.totalItems,
                totalPages: results.totalPages
            });
        })
        .catch(error => {
            console.log("Something went wrong")
        })
    }

    searchPerson() {
        movieService.searchPerson(this.state.personSearch, this.state.startPage)
        .then(results => {
            this.props.navigation.push('ListPage', { 
                items: results.items,
                search: this.state.personSearch,
                type: 'search_person',
                totalItems: results.totalItems,
                totalPages: results.totalPages
            });
        })
        .catch(error => {
            console.log("Something went wrong")
        })
    }

    render() {
        return (
            <View>
                <MenuBar navigation={this.props.navigation} />
                <Text style={styles.movieText}>
                    Search for a movie
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="The Secret Life of Walter Mitty"
                    onChangeText={(val) => this.handleMovie(val)}
                    onSubmitEditing={() => this.searchMovie()}
                />
                <Text style={styles.movieText}>
                    Search for a person
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Brad Pitt"
                    clearTextOnFocus={true}
                    onChangeText={(val) => this.handlePerson(val)}
                    onSubmitEditing={() => this.searchPerson()}
                />
            </View>
        )
    }
}