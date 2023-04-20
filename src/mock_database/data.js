import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    cashIcon:{
        width: 40,
        height: 40,
        resizeMode: 'stretch'
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

const expenses = [
    { 
        title: 'HOME & UTILITIES',
        amount: '3296.98',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/plug.png')}/>
    },
    { 
        title: 'TRAVEL',
        amount: '4296.98',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/travel.png')}/>
    },
    { 
        title: 'RIDE SHARING',
        amount: '6000.98',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/uber.png')}/>
    },
    { 
        title: 'GROCERIES',
        amount: '1296.98',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/grocery.png')}/>
    },
    { 
        title: 'DRINKS',
        amount: '396.98',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/soda.png')}/>
    },
    { 
        title: 'RENT',
        amount: '3296.98',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/house.png')}/>
    },
    { 
        title: 'INSURANCE',
        amount: '896.98',
        icon: <Image style={styles.cashIcon} source={require('../../assets/icons/bank.png')}/>
    }
]

export { accounts, expenses }

