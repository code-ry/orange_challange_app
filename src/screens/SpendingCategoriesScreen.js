import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

// All Spending Category component mapping through list of ALL Expenses using FLATLIST.


const SpendingCategoriesScreen = () => {
    return (
        <View style= {styles.container}>
            <Text style= {styles.titleText}>All Spending Categories</Text>
        </View>
    )
}

export default SpendingCategoriesScreen

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