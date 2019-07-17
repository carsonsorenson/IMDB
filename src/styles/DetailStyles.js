import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imageRow: {
        height: 250,
        backgroundColor: 'black'
    },
    movieImage: {
        flex: 1,
    },
    contentRow: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    posterColumn: {
        height: 160,
        padding: 10
    },
    infoColumn: {
        height: 160,
        justifyContent: 'center'
    },
    space: {
        marginTop: 10,
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
    horizontalScroll: {
        width: 180,
    },
    horizontalImage: {
        width: 150,
        height: 200
    }
})