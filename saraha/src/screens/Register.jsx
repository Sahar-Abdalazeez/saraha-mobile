import React, { useState } from 'react';
//icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPerson } from '@fortawesome/free-solid-svg-icons/faPerson'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
//components
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Input, Logo, MainButton, NavigationButton } from '../components';
//storage 
import AsyncStorage from '@react-native-async-storage/async-storage';


/**
 *  Register
 */
export const Register = ({ navigation }) => {
    const [user, setUser] = useState({});
    console.log('user', user);
    // handle register
    const handleRegister = async (value) => {
        try {
            await AsyncStorage.setItem("user", JSON.stringify(value));
            console.log('hello register')

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <Screen style={styles.screen}>
            <NavigationButton text='Login' onPress={() => navigation.navigate('Login')} />

            <View style={styles.container}>
                <Logo style={{ alignSelf: 'center' }} />
                <Text style={styles.title}>Sarahah</Text>

                <Input onChange={(name) => setUser({ name })} icon={faPerson} placeholder="Username" />
                <Input onChange={(email) => setUser(prevState => ({ ...prevState, email }))} icon={faEnvelope} placeholder="Email" />
                <Input onChange={(password) => setUser(prevState => ({ ...prevState, password }))} icon={faLock} placeholder="Password" />
                <Input onChange={(cpassword) => setUser(prevState => ({ ...prevState, cpassword }))} icon={faLock} placeholder="Confirm Password" />

            </View>
            <MainButton text="Register" onPress={() => handleRegister(user)} />

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