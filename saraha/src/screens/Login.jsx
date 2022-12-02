import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '../components/Screen';
export const Login = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <FontAwesomeIcon icon={faEnvelope} size={100} color="#fff" />
                <Text style={styles.title}>SARAHA</Text>
                <Text style={styles.title}>صراحة</Text>
            </View>
        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        // flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    title: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '700'
    }
})