import React from 'react';
//icons 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
//components
import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '../components';

/**
 * Intro
 */
export const Messages = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>

            </View>
        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#f2f2f2'

    },
    title: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '700'
    }
})