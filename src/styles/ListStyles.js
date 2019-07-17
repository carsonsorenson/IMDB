import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    movieListText: {
        fontSize: 24,
        alignSelf: 'flex-start',
        padding: 10
    },
    listContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        height: 160,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        elevation: 2,
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    imageContainer: {
        flex: 1,
        height: 160,
        padding: 10
    },
    infoContainer: {
        flex: 3,
        height: 160,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined, 
    },
})