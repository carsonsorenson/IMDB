import React, { Component } from 'react';
import { Text } from 'react-native';

import movieService from '../services/movie.service';
import MovieDetail from '../components/MovieDetail';

export default class MovieDetailScreen extends Component {
    static navigationOptions = {
        title: 'MovieDetailScreen'
    }

    constructor(props) {
        super(props)

        this.state = {
            movie: null
        }
    }

    componentDidMount() {
        this.getMovie();
    }

    getMovie() {
        movieService.getMovieDetail(this.props.navigation.getParam('id'))
        .then(item => {
            this.setState({
                movie: item
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    loading() {
        return (
            <Text>
                Loading...
            </Text>
        )
    }

    personClicked(id) {
        this.props.navigation.push('PersonDetailScreen', {
            id: id
        });
    }

    displayMovie() {
        return (
            <MovieDetail 
                movie={this.state.movie}
                personClicked={(id) => {this.personClicked(id)}}
                navigation={this.props.navigation}
            />
        )
    }

    render() {
        return (
            this.state.movie === null ? this.loading() : this.displayMovie()
        );
    }

    componentWillUnmount() {
        this.setState({ movie: null });
    }
}