import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    touchableButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})