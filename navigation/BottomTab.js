import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons' 
import HomeScreen from '../src/screens/HomeScreen';
import ExpensesScreen from '../src/screens/ExpensesScreen';
import PortfolioScreen from '../src/screens/PortfolioScreen';
import BankAccountScreen from '../src/screens/BankAccountScreen';
import MoreScreen from '../src/modals/MoreScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: 'rgb(74,123,208)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        tabBarStyle: { 
            position: 'absolute',
            height: 80,
            paddingBottom: 20,
            backgroundColor: '#fff',
            
            },
          }}
        >
            <Tab.Screen 
                name = 'Home' 
                component= {HomeScreen} 
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => <Ionicons name="home-outline" size={24} color="black" />
                }}
            />
            <Tab.Screen 
                name = 'Expenses' 
                component= {ExpensesScreen} 
                options={{
                    title: 'Expenses',
                    tabBarIcon: ({ focused }) => <Ionicons name="ios-pie-chart-outline" size={24} color="black" />
                }}/>
            <Tab.Screen 
                name = 'Portfolio' 
                component= {PortfolioScreen} 
                options={{
                    title: 'Portfolio',
                    tabBarIcon: ({ focused }) => <MaterialIcons name="attach-money" size={24} color="black" />
                }}/>
            <Tab.Screen 
                name = 'BankAccounts' 
                component= {BankAccountScreen} 
                options={{
                    title: 'Bank Accounts',
                    tabBarIcon: ({ focused }) => <Octicons name="list-unordered" size={24} color="black" />
                }}/>
            <Tab.Screen 
                name = 'More' 
                component= {MoreScreen} 
                options={{
                    title: 'More',
                    tabBarIcon: ({ focused }) => <Entypo name="dots-three-horizontal" size={24} color="black" />
                }}/>
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})
