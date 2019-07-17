import React, { Component } from 'react';
import { Container, Text, Content, Row, H1, H2, H3, Col, Grid, CardItem, Left, Body, Card } from 'native-base';
import { Image, FlatList, View, TouchableOpacity } from 'react-native';
import movieService from '../services/movie.service';
import styles from '../styles/DetailStyles';
import MenuBar from '../components/MenuBar';

export default class PersonDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            personCredits: []
        }
    }

    componentDidMount() {
        this.getPersonCredits();
    }

    getPersonCredits() {
        movieService.getPersonCredits(this.props.person.getId())
        .then(items => {
            this.setState({
                personCredits: items
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { person } = this.props;
        return (
            <Container>
                <Content>
                    <MenuBar navigation={this.props.navigation} />
                    <H1> { person.getName() } </H1>
                    <Grid style={styles.space}>
                        <Col style={styles.posterColumn} size={30}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: person.getImage() }}
                                resizeMode="contain"
                            />
                        </Col>
                        <Col style={styles.infoColumn} size={70}>
                            <Text> Born: {person.getBirthDate()} in {person.getPlaceOfBirth()}</Text>
                            {person.getDeathDate() !== null ?
                                <Text> Died: {person.getDeathDate()} </Text> 
                            : null
                            }
                        </Col>
                    </Grid>
                    <Card>
                        <Body>
                            <Text>
                                {person.getBiography()}
                            </Text>
                        </Body>
                    </Card>
                    <H2> Credits </H2>
                    <H3> Known for: </H3>
                    <FlatList
                        data={this.state.personCredits}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={() => this.props.movieClicked(item.getId())}>
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
                                                {item.getTitle() + '\n'}
                                            </Text>
                                            <Text note numberOfLines={3}>
                                                {item.getCharacterName() + '\n' + item.getYear()}
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
        this.setState({personCredits: null});
    }
}