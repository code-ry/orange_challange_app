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
    },
    image: {
        width: '100%',
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
})

export default commonStyles
