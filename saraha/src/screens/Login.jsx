import React from 'react';
//icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPerson } from '@fortawesome/free-solid-svg-icons/faPerson'
//components
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Input, Logo, MainButton, NavigationButton } from '../components';
//storage 
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Login
 */
export const Login = ({ navigation }) => {
    //handle login 
    const handleLogin = async () => {
        try {
            const savedUser = await AsyncStorage.getItem("user");
            const currentUser = JSON.parse(savedUser);
            console.log(currentUser);
        } catch (error) {
            console.log(error);
        }
    };
    return (

        <Screen style={styles.screen}>
            <NavigationButton text='Register' onPress={() => navigation.navigate('Register')} />

            <View style={styles.container}>
                <Logo style={{ alignSelf: 'center' }} />
                <Text style={styles.title}>Sarahah</Text>

                <Input icon={faPerson} placeholder="Username" />
                <Input icon={faEnvelope} placeholder="Email" />

            </View>
            <MainButton onPress={() => handleLogin()} text="Login" />

        </Screen>
    )
}


const styles = StyleSheet.create({
    screen: {
        paddingTop: 30,
        padding: 0
    },
    container: {
        disply: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 20
    },
    title: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '700',
        marginBottom: 30,
        textAlign: 'center'
    }

})