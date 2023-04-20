import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import accounts from '../mock_database/data'

const CashAccountList = () => {
    return (
        <View>
            {accounts.map((account) =>
                <View key={account.title} style={styles.cashAccount}>
                    <View style={styles.cashIconContainer}>{account.icon}</View>
                    <View style={styles.cashInfo}>
                        <Text style={styles.cashInfoTitle}>{account.title}</Text>
                        <Text style={styles.cashInfoAccount}>{account.account}</Text>
                    </View>
                    <View style={styles.cashAmount}>
                        <Text>${account.amount}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}

export default CashAccountList

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


