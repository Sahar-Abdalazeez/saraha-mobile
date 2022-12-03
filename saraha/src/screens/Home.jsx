import React, { useState } from "react";
//icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";

import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Messages, SendMessage, Profile, Users } from '../screens';
//components
import { StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

export const Home = () => {

    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator

                screenOptions={{
                    headerTitleStyle: { color: '#fff', fontSize: 22 },
                    headerStyle: { backgroundColor: '#10bbb3' },
                    headerLeft: () => <FontAwesomeIcon icon={faBars} color="#fff" style={{ marginLeft: 20 }} size={25} />,
                }}
            >
                <Drawer.Screen name="Messages" component={Messages} options={{
                    title: "Messages",
                    drawerIcon: () => (
                        <FontAwesomeIcon
                            icon={
                                faEnvelope
                            }
                            size={30}
                            color={'#10bbb3'}
                        />
                    ),
                }} />

                <Drawer.Screen name="SendMessage" component={SendMessage} options={{
                    title: "SendMessage",
                    drawerIcon: () => (
                        <FontAwesomeIcon
                            icon={
                                faPaperPlane
                            }
                            size={20}
                            color={'#10bbb3'}
                        />
                    ),
                }} />

                <Drawer.Screen name="Profile" component={Profile} options={{
                    title: "Profile",
                    drawerIcon: () => (
                        <FontAwesomeIcon
                            icon={
                                faPerson
                            }
                            size={30}
                            color={'#10bbb3'}
                        />
                    ),
                }} />

                <Drawer.Screen name="Users" component={Users} options={{
                    title: "Users",
                    drawerIcon: () => (
                        <FontAwesomeIcon
                            icon={
                                faUsers
                            }
                            size={30}
                            color={'#10bbb3'}
                        />
                    ),
                }} />
            </Drawer.Navigator>
        </NavigationContainer >
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
