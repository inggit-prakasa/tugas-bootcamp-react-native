import React from 'react';
import { TextInput,View,Text,SafeAreaView,StyleSheet,Button } from 'react-native';

export function Heading ({children,style,props}) {
    return <Text {...props} style={[style,styles.text]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        color: 'black',
    }
});
