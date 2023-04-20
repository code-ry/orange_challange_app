import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import commonStyles from '../styles/common'
import ExpensesList from '../components/ExpenseList'



const ArrowButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)

const ExpensesScreen = () => {
    return (
        <ScrollView>
            <View style= {commonStyles.mainContainer}>
                <View style={commonStyles.container}>
                    <View>
                        
                        <Image
                            style={commonStyles.image}
                            source ={require('../../assets/images/pie_graph.png')}
                        />
                    </View>
                    
                    <View style={ commonStyles.listContainer }>
                        <View style={commonStyles.headingContainer}>
                            <Text style= {commonStyles.headingText}>Top Spending Categories</Text>
                        </View>
                        
                        <ExpensesList />

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ExpensesScreen

const styles = StyleSheet.create({})
