import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro, Login, Register, Home } from '../screens';

const AppNav = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Intro">
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
        </Stack.Navigator>
    );
};

export default AppNav;
