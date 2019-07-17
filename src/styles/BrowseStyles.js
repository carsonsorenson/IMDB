import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
    },
    genreContainer: {
        flex: 1/2,
        height: 150,
        backgroundColor: 'lightblue',
        margin: 10,
        justifyContent: 'center',
        borderRadius: 20,
    },
    genreText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black'
    },
    largeButton: {
        height: '100%',
        justifyContent: 'center'
    }
})