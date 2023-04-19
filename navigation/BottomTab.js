import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ExpensesScreen from '../src/screens/ExpensesScreen';
import PortfolioScreen from '../src/screens/PortfolioScreen';
import BankAccountScreen from '../src/screens/BankAccountScreen';
import MoreScreen from '../src/modals/MoreScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = 'Home' component= {HomeScreen}/>
            <Tab.Screen name = 'Expenses' component= {ExpensesScreen}/>
            <Tab.Screen name = 'Portfolio' component= {PortfolioScreen}/>
            <Tab.Screen name = 'BankAccounts' component= {BankAccountScreen}/>
            <Tab.Screen name = 'More' component= {MoreScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})
