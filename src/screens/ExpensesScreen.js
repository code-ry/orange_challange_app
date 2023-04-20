import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Button, Pressable } from 'react-native'
import commonStyles from '../styles/commonStyles'
import ExpensesList from '../components/ExpenseList'



const ArrowButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)

const ExpensesScreen = ({ navigation }) => {
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
                        
                        {/* Component to render list of expenses */}
                        <ExpensesList />
                        <Pressable onPress={() => navigation.navigate('SpendingCategories')}>
                            <View style={commonStyles.navigationTab}>
                                <View><Text>View all categories</Text></View>
                                <Image style={commonStyles.arrowButton} source ={require('../../assets/icons/arrow.png')}/>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ExpensesScreen

const styles = StyleSheet.create({})
