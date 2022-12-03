import React, { useState } from "react";
//icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//components
import { View, Text, StyleSheet } from "react-native";




function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>No New Notifications!</Text>
            {/* <Button
                onPress={() => navigation.goBack()}
                title="Go back home"
            /> */}
        </View>
    );
}



const Drawer = createDrawerNavigator();

export const Home = ({ navigation }) => {

    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator >
                {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: 30,
        padding: 0,
        backgroundColor: '#fff'
    },
    container: {
        disply: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        padding: 20,
    },
    title: {
        fontSize: 50,
        color: "#fff",
        fontWeight: "700",
        marginBottom: 30,
        textAlign: "center",
    },
    error: {
        fontSize: 14,
        color: "red",
        marginBottom: 20,
        marginLeft: 15,
    },
});
