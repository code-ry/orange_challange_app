import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { expenses } from '../mock_database/Data'

// Component to map through a list of data from incoming JSON fetch request and render as components.

const ExpensesList = () => {
    return (
        <View>
            {expenses.map((expense) =>
                <View key={expense.title} style={styles.listContainer}>
                    <View style={styles.iconContainer}>{expense.icon}</View>
                    <View style={styles.ExpenseInfoContainer}>
                        <Text style={styles.listInfoTitle}>{expense.title}</Text>
                        <Text style={styles.expenseAmount}>${expense.amount} spent</Text>
                    </View>
                    <View style={styles.arrowButtonContainer}>
                        <Pressable>
                            <Image style={styles.arrowButton} source ={require('../assets/icons/arrow.png')}/>
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    )
}

export default ExpensesList

const styles = StyleSheet.create({
    listContainer:{
        flexDirection: 'row',
        height: 70,
        backgroundColor: 'white',
        marginBottom: 2,
    },
    iconContainer:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ExpenseInfoContainer:{
        flex: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingLeft: 20
    },
    listInfoTitle: {
        fontSize: 15
    },
    expenseAmount: {
        fontSize: 20
    },
    arrowButtonContainer:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowButton: {
        width: 20,
        height: 20
    }
})