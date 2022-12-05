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
export const Intro = ({ navigation }) => {
    //automatically go to login screen 
    setTimeout(() => {
        navigation.navigate('Login')
    }, 5000);

    return (
        <Screen style={styles.screen} safeAreaColor='#10bbb3'>
            <View style={styles.container}>
                <FontAwesomeIcon icon={faEnvelope} size={100} color="#fff" />
                <Text style={styles.title}>SARAHAH</Text>
                <Text style={styles.title}>صراحة</Text>
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
    },
    title: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '700'
    }
})