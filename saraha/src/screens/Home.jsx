import React, { useEffect, useState } from "react";
//icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import AsyncStorage from "@react-native-async-storage/async-storage";

//components
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";


export const Home = ({ navigation }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        handleCheck();
    }, [])

    const handleCheck = async () => {
        try {
            const result = await AsyncStorage.getItem('loginToken')
            const token = JSON.parse(result)
            setUser(token);
        }
        catch (error) {
            console.log('error', error)
        }
    }

    return (

        <View style={styles.screen}>
            <TouchableOpacity onPress={() => navigation.navigate('Users')}>
                <Text>Users  </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RecievedMessages', {

                userToken: user,
            })}>
                <Text>Messages  </Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: 200,
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
