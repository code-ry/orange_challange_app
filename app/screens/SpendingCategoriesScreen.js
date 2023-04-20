import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import ExpensesList from '../components/ExpenseList'
import commonStyles from '../globals/styles/GlobalStyles'

const SpendingCategoriesScreen = () => {
    return (
        <ScrollView>
            <View style={commonStyles.headingContainer}>
                <Text style= {commonStyles.headingText}>All Spending Categories</Text>
            </View>

            <ExpensesList />

        </ScrollView>
    )
}

export default SpendingCategoriesScreen

const styles = StyleSheet.create({})