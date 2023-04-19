import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BankAccountScreen = () => {
    return (
        <View style= {styles.container}>
            <Text style= {styles.titleText}>Bank Accounts</Text>
        </View>
    )
}

export default BankAccountScreen

const styles = StyleSheet.create({
    titleText: {
        color: 'orange'
    },
    container :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
