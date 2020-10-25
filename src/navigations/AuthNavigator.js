import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginPage} from '../screens/Login';
import {RegistrationPage} from '../screens/Register';

const AuthStack  = createStackNavigator();

export function AuthNavigator () {
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <AuthStack.Screen name={'Login'} component={LoginPage} />
            <AuthStack.Screen name={'Register'} component={RegistrationPage} />
        </AuthStack.Navigator>
    )
}
