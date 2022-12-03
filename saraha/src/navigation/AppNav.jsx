import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro, Login, Register, Home, Users, SendMessage } from '../screens';

const AppNav = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Intro"
                component={Intro}
                options={{ headerShown: false }}
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
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Users"
                component={Users}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SendMessage"
                component={SendMessage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AppNav;
