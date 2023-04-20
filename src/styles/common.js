import { StyleSheet } from 'react-native'

const commonStyles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
    },
    container: {
        padding: 20,
        width: '100%',
        maxWidth: 500,
        alignItems: 'stretch',
        paddingBottom: 100
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'stretch'
    },
    listContainer: {
        flex: 1,
        paddingTop: 20,
    },
    headingContainer: {
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginBottom: 2,
        height: 70
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    navigationTab: {
        flexDirection: 'row',
        padding: 20,
        height: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    arrowButton: {
        width: 20,
        height: 20
    }
})

export default commonStyles
