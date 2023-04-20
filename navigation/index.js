import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Octicons, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'
import BankAccountScreen from '../app/screens/BankAccountScreen'
import ExpensesScreen from '../app/screens/ExpensesScreen'
import HomeScreen from '../app/screens/HomeScreen'
import MoreScreen from '../app/modals/MoreScreen'
import PortfolioScreen from '../app/screens/PortfolioScreen'
import SpendingCategoriesScreen from '../app/screens/SpendingCategoriesScreen'

export default function Navigation () {
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    )
  }
  
  const Stack = createNativeStackNavigator()
  
// Stack Navigation Layout and Styling

  const RootNavigator = (() => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
            name="Root" 
            component={BottomTab} 
            options={{ headerShown: false }} />
        <Stack.Screen 
            name="SpendingCategories" 
            component={SpendingCategoriesScreen} 
            options={
                {headerStyle: {
                    backgroundColor: 'rgb(74,123,208)'
                },
                headerTintColor: '#fff',
                title:''
                }} />
      </Stack.Navigator>
    )
  })
  
const Tab = createBottomTabNavigator()

// Tab Navigation Layout and Styling

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
  