import React, {useState} from 'react';
import { TextInput,View,Text,SafeAreaView,StyleSheet,Button } from 'react-native';
import {LoginPage} from './src/screens/Login';
import Home from './src/screens/Home';
import {RegistrationPage} from './src/screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigator} from './src/navigations/AuthNavigator';

const RootStack  = createStackNavigator();

export default function () {
  return (
      <NavigationContainer>
          <RootStack.Navigator screenOptions={{
              headerShown:false
          }}>
              <RootStack.Screen name={'AuthStack'} component={AuthNavigator}/>
          </RootStack.Navigator>
      </NavigationContainer>
  )
}
