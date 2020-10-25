import React from 'react';
import { TextInput,View,Text,SafeAreaView,StyleSheet,Button } from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';

export function LoginPage ({navigation}) {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>LOGIN</Heading>
            <Input style={styles.input}  placeholder={'Username'}/>
            <Input style={styles.input}  placeholder={'Password'} secureTextEntry/>
            <FilledButton title={'LOGIN'} style={styles.loginButton} onPress={() => {navigation.navigate('Register')}}/>
            <TextButton title={'Have u an account ? create one'} style={styles.textButton} onPress={() => {}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 120,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title : {
      marginBottom : 48
    },
    loginButton: {
        marginTop : 32
    },
    textButton: {
        marginTop: 8
    },
    input: {
        marginVertical: 8,
    },
});
