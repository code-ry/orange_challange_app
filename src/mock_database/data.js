import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
    },
    container: {
        padding: 20,
        width: '100%',
        maxWidth: 500,
        alignItems: 'stretch',
    },
    graph: {
        width: '100%',
        resizeMode: 'stretch'
    },
    listContainer: {
        flex: 1,
        paddingTop: 20,

    },
    cashHeading: {
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
    cashAccount:{
        flexDirection: 'row',
        height: 70,
        backgroundColor: 'white',
        marginBottom: 2,
    },
    cashIconContainer:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cashIcon:{
        width: 40,
        height: 40,
        resizeMode: 'stretch'
    },
    cashInfo:{
        flex: 3,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    cashInfoTitle: {
        fontSize: 15
    },
    cashInfoAccount: {
        fontSize: 20
    },
    cashAmount:{
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const accounts = [
    { 
        title: 'WEALTHFRONT',
        account: 'Personal Savings',
        amount: '92,875',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/elearning.png')}/>
    },
    { 
        title: 'BANK OF AMERICA',
        account: 'BofA Checkings',
        amount: '12,030',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/bank.png')}/>
    },
    { 
        title: 'ROBINHOOD',
        account: 'Robinhood Cash',
        amount: '7,123',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/leaf.png')}/>
    },
    { 
        title: 'COINBASE PRO',
        account: 'Coinbase USD',
        amount: '15,712',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/letter-c.png')}/>
    },
]

export default accounts

