import React from 'react';
import { TextInput,View,Text,SafeAreaView,StyleSheet,Button } from 'react-native';

export function Input ({style, ...props}) {
    return <TextInput {...props} style={[style, styles.input]} />
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ccc',
        width : '100%',
        padding: 12,
        borderRadius: 8,
    }
});
