import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style= {styles.mainContainer}>
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.graph}
                            source ={require('../../assets/cash_graph.png')}
                        />
                    </View>
                    
                    <View style={ styles.listContainer }>
                        <View style={styles.cashHeading}>
                            <Text style= {styles.headingText}>Cash</Text>
                        </View>
                        
                        {accounts.map((account) =>
                            <View style={styles.cashAccount}>
                                <View style={styles.cashIconContainer}>{account.icon}</View>
                                <View style={styles.cashInfo}>
                                    <Text style={{fontSize: 15}}>{account.title}</Text>
                                    <Text style={{fontSize: 20}}>{account.account}</Text>
                                </View>
                                <View style={styles.cashAmount}>
                                    <Text>${account.amount}</Text>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    container: {
        padding: 20,
        width: '100%',
        maxWidth: 500,
        alignItems: 'stretch',
        backgroundColor: 'red'
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
        height: 50
    },
    headingText: {
        fontWeight: 'bold'
    },
    cashAccount:{
        flexDirection: 'row',
        height: 50,
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
        icon: <Image style={styles.cashIcon} source={require('../../assets/elearning.png')}/>
    },
    { 
        title: 'BANK OF AMERICA',
        account: 'BofA Checkings',
        amount: '12,030',
        icon: <Image style={styles.cashIcon} source={require('../../assets/bank.png')}/>
    },
    { 
        title: 'ROBINHOOD',
        account: 'Robinhood Cash',
        amount: '7,123',
        icon: <Image style={styles.cashIcon} source={require('../../assets/leaf.png')}/>
    },
    { 
        title: 'COINBASE PRO',
        account: 'Coinbase USD',
        amount: '15,712',
        icon: <Image style={styles.cashIcon} source={require('../../assets/letter-c.png')}/>
    },
]