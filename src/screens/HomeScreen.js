import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

// Graph component FETCHING data from database translating into line graph using GraphQL.

// Cash component FETCHing data from database to update STATE of individual Accounts components upon mount

const HomeScreen = () => {
    return (
        <View style= {styles.container}>
            <Text style= {styles.titleText}>Home Screen</Text>
        </View>
    )
}

export default HomeScreen

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