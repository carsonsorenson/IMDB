import React, { Component } from 'react';
import { Text } from 'react-native';

import movieService from '../services/movie.service';
import PersonDetail from '../components/PersonDetail';

export default class MovieDetailScreen extends Component {
    static navigationOptions = {
        title: 'PersonDetailScreen'
    }

    constructor(props) {
        super(props)

        this.state = {
            person: null
        }
    }

    componentDidMount() {
        this.getPerson();
    }

    getPerson() {
        movieService.getPersonDetail(this.props.navigation.getParam('id'))
        .then(item => {
            this.setState({
                person: item
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

    movieClicked(id) {
        console.log(id);
        this.props.navigation.push('MovieDetailScreen', {
            id: id
        });
    }

    displayPerson() {
        return (
            <PersonDetail
                person={this.state.person}
                movieClicked={(id) => {this.movieClicked(id)}}
                navigation={this.props.navigation}
            />
        )
    }

    render() {
        return (
            this.state.person === null ? this.loading() : this.displayPerson()
        );
    }
    
    componentWillUnmount() {
        this.setState({ person: null });
    }
}