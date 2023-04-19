import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

// Expenses Graph fetching data from expenses and translating to graph.

// Top Spending Category component mapping through list of Expenses using FLATLIST.
// Order components by highest VALUE ID

const ExpensesScreen = () => {
    return (
        <View style= {styles.container}>
            <Text style= {styles.titleText}>Expenses Screen</Text>
        </View>
    )
}

export default ExpensesScreen

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
