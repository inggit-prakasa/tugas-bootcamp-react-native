import React from 'react';
import { TextInput,View,Text,SafeAreaView,StyleSheet,Button } from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';

export function RegistrationPage () {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>REGISTRATION</Heading>
            <Input style={styles.input}  placeholder={'Username'}/>
            <Input style={styles.input}  placeholder={'Password'} secureTextEntry/>
            <FilledButton title={'REGISTER'} style={styles.loginButton} onPress={() => {}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 120,
        alignItems: 'center',
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
