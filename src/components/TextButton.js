import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function TextButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={[styles.text, {color: '#9932CC'}]}>
                {title.toUpperCase()}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontWeight: '500',
        fontSize: 14,
    },
});
