import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPerson } from '@fortawesome/free-solid-svg-icons/faPerson'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'

import { View, Text, StyleSheet } from 'react-native';
import { Screen, Input, Logo, MainButton } from '../components';

export const Login = () => {
    return (

        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Logo style={{ alignSelf: 'center' }} />
                <Text style={styles.title}>Sarahah</Text>

                <Input icon={faPerson} placeholder="Username" />
                <Input icon={faEnvelope} placeholder="Email" />
                <Input icon={faLock} placeholder="Password" />
                <Input icon={faLock} placeholder="Confirm Password" />

                <MainButton text="Register" />
            </View>
        </Screen>
    )
}


const styles = StyleSheet.create({
    screen: {

        paddingTop: 50

    },
    container: {
        disply: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '700',
        marginBottom: 30,
        textAlign: 'center'
    }

})