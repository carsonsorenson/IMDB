import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from '../styles/ListStyles';
import movieService from '../services/movie.service';

import Movie from '../components/MovieSummary';
import Person from '../components/PersonSummary';
import MenuBar from '../components/MenuBar';

export default class ListPage extends PureComponent {
    static navigationOptions = {
        title: 'ListPage'
    }

    constructor(props) {
        super(props)

        this.state = {
            page: 1,
            items: [],
            type: null,
            loading: false,
            totalItems: null,
            totalPages: null
        }
    }

    componentDidMount() {
        this.setState({ 
            items: this.props.navigation.getParam('items'),
            type: this.props.navigation.getParam('type'),
            totalItems: this.props.navigation.getParam('totalItems'),
            totalPages: this.props.navigation.getParam('totalPages')
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items !== this.state.items) {
            this.setState({
                page: ++this.state.page,
                loading: false
            });
        }
    }

    renderEmptyList = () => {
        return (
            <Text>...Just a few more seconds</Text>
        );
    }

    renderObj = ({ item, index }) => {
        if (this.state.type === 'browse' || this.state.type === 'search_movie') {
            return (
                <Movie val={item} movieClicked={(id) => this.movieClicked(id)} />
            )
        }
        else {
            return (
                <Person val={item} personClicked={(id) => this.personClicked(id)} />
            )
        }
    }

    movieClicked(id) {
        this.props.navigation.push('MovieDetailScreen', { id: id });
    }

    personClicked(id) {
        this.props.navigation.push('PersonDetailScreen', { id: id});
    }

    getMoreItems() {
        if (!this.state.loading && this.state.page <= this.state.totalPages) {
            this.setState({loading: true});
            if (this.state.type === 'search_movie') {
                this.searchMovies();
            }
            else if (this.state.type == 'search_person') {
                this.searchPerson();
            }
            else {
                this.browseMovies();
            }
        }
    }

    searchMovies() {
        movieService.searchMovie(this.props.navigation.getParam('search'), this.state.page)
        .then(results => {
            this.setState({
                items: [...this.state.items, ...results.items],
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    searchPerson() {
        movieService.searchPerson(this.props.navigation.getParam('search'), this.state.page)
        .then(results => {
            this.setState({
                items: [...this.state.items, ...results.items]
            });
        })
        .catch(error => {
            console.log("Something went wrong")
        })  
    }

    browseMovies() {
        movieService.browseGenre(this.props.navigation.getParam('id'), this.state.page)
        .then(results => {
            this.setState({
                items: [...this.state.items, ...results.items],
            });
        })
        .catch(error => {
            console.log(error)
        });    
    }

    render() {
        return(
            <View style={styles.container}>
            <MenuBar navigation={this.props.navigation} />
                <FlatList 
                    data={this.state.items}
                    keyExtractor={(item, index) => item.id.toString() + index.toString()}
                    renderItem={this.renderObj}
                    ListEmptyComponent={this.renderEmptyList}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => this.getMoreItems()}
                />
            </View>
        )
    }
}