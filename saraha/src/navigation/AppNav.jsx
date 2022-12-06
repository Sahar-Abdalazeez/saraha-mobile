import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro, Login, Register, Home, Users, SendMessage, RecievedMessages } from '../screens';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNav = () => {
    const [userToken, setUserToken] = useState();

    const checkIfUserLoggedBefore = async () => {
        try {
            const result = await AsyncStorage.getItem('loginToken')
            const token = JSON.parse(result);
            setUserToken(token);
        }
        catch (error) {
            console.log('error', error)
        }
    }


    useEffect(() => {
        checkIfUserLoggedBefore()
    }, [])

    const introScreen = userToken?.length ? 'Intro' : 'Home';
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={introScreen}>
            <Stack.Screen
                name="Intro"
                component={Intro}
                options={{ headerShown: false, }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                    navigationBarColor: 'black'
                }}
            />
            <Stack.Screen
                name="RecievedMessages"
                component={RecievedMessages}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Users"
                component={Users}
                options={{ headerShown: false, }}
            />
            <Stack.Screen
                name="SendMessage"
                component={SendMessage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AppNav;
