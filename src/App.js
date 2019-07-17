import React, {Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import BrowsePage from './screens/BrowsePage';
import SearchPage from './screens/SearchPage';
import ListPage from './screens/ListPage';
import MovieDetailScreen from './screens/MovieDetailScreen';
import PersonDetailScreen from './screens/PersonDetailScreen';

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const Root = createStackNavigator(
    {
        Home: HomeScreen,
        SearchPage: SearchPage,
        BrowsePage: BrowsePage,
        ListPage: ListPage,
        MovieDetailScreen: MovieDetailScreen,
        PersonDetailScreen: PersonDetailScreen
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(Root)
