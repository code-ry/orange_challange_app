import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function Login({ navigation }){
    return(
      <View>
        <Text>Login</Text>
        <Button onPress={() => navigation.navigate('SignUp')}  title='Signup'/>
      </View>
    )
  }

export default Login

const styles = StyleSheet.create({})
