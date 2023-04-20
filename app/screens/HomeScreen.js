import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import commonStyles from '../globals/styles/GlobalStyles'
import CashAccountList from '../components/CashAccountList'

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style= {commonStyles.mainContainer}>
                <View style={commonStyles.container}>
                    <View>
                        <Image
                            style={commonStyles.image}
                            source ={require('../assets/images/cash_graph.png')}
                        />
                    </View>

                    <View style={ commonStyles.listContainer }>
                        <View style={commonStyles.headingContainer}>
                            <Text style= {commonStyles.headingText}>Cash</Text>
                        </View>

                        {/* Component to render list of current Account amounts */}

                        <CashAccountList />

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})