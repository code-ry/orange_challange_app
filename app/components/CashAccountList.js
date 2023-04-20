import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { accounts } from '../mock_database/Data'

// Component to map through a list of data from incoming JSON fetch request and render as components.

const CashAccountList = () => {
    return (
        <View>
            {accounts.map((account) =>
                <View key={account.title} style={styles.cashAccount}>
                    <View style={styles.cashIconContainer}>{account.icon}</View>
                    <View style={styles.cashInfoContainer}>
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
    cashInfoContainer:{
        flex: 3,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingLeft: 20
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


