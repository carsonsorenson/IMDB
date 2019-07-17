import React, { Component } from 'react';
import { Container, Text, Content, Row, H1, H2, H3, Col, Grid, CardItem, Left, Body } from 'native-base';
import { Image, FlatList, View, TouchableOpacity } from 'react-native';
import movieService from '../services/movie.service';
import MenuBar from '../components/MenuBar';

import styles from '../styles/DetailStyles';

export default class MovieDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            actors: []
        }
    }

    componentDidMount() {
        this.getActors();
    }

    getActors() {
        movieService.getActors(this.props.movie.getId())
        .then(items => {
            this.setState({
                actors: items
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { movie } = this.props;
        return (
            <Container>
                <Content>
                    <MenuBar navigation={this.props.navigation} />
                    <Row style={styles.imageRow}>
                        <Image
                            style={styles.movieImage}
                            source={{ uri: movie.getBackdrop() }}
                            resizeMode="contain"
                        />
                    </Row>
                    <H2>{movie.getTitle()}</H2>
                    <Text>{movie.getReleaseDate()}</Text>
                    <Text>Popularity: {movie.getPopularity()}</Text>
                    <Text note>{movie.getOverview()}</Text>
                    <Grid style={styles.space}>
                        <Col style={styles.posterColumn} size={30}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: movie.getPoster() }}
                                resizeMode="cover"
                            />
                        </Col>
                        <Col style={styles.infoColumn} size={70}>
                            <Text>Genres: {movie.getGenres()}</Text>
                            <Text>Budget: {movie.getBudget()}</Text>
                            <Text>Revenue: {movie.getRevenue()}</Text>
                            <Text>Status: {movie.getStatus()}</Text>
                        </Col>
                    </Grid>
                    <H2> Cast </H2>
                    <FlatList
                        data={this.state.actors}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={() => this.props.personClicked(item.getId())}>
                                <View style={styles.horizontalScroll}>
                                    <CardItem>
                                        <Image
                                            style={styles.horizontalImage}
                                            source={{ uri: item.getImage() }}
                                            resizeMode="cover"
                                        />
                                    </CardItem>
                                    <CardItem>
                                        <View style={{justifyContent: 'center'}}>
                                            <Text numberOfLines={2}>
                                                {item.getPersonName() + '\n'}
                                            </Text>
                                            <Text note numberOfLines={3}>
                                                {item.getCharacterName()}
                                            </Text>
                                        </View>
                                    </CardItem>
                                </View>
                            </TouchableOpacity>
                        }
                        horizontal={true}
                    />
                </Content>
            </Container>
        )
    }

    componentWillUnmount() {
        this.setState({actors: null});
    }
}