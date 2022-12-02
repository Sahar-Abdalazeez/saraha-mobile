import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Input, Logo } from '../components';

export const Login = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Logo />
                <Input />
            </View>
        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

})