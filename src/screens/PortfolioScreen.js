import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PortfolioScreen = () => {
    return (
        <View style= {styles.container}>
            <Text style= {styles.titleText}>Portfolio Screen</Text>
        </View>
    )
}

export default PortfolioScreen

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
