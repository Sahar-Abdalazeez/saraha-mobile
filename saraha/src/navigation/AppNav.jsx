import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro, Login, Register } from '../screens';

const AppNav = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Login">
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
        </Stack.Navigator>
    );
};

export default AppNav;
