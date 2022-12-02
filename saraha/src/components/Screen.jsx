import React from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';

export const Screen = ({ children, style }) => {
    return (
        <View style={styles.container} >
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#10bbb3',
        padding: 20,
    }
})