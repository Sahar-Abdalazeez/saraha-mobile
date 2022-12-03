import React, { useState } from "react";
//icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

//components
import { View, Text, StyleSheet } from "react-native";
import {
    Screen,
    Input,
    Logo,
    MainButton,
    NavigationButton,
} from "../components";
//storage
import AsyncStorage from "@react-native-async-storage/async-storage";
//api 
import axios from "axios";
const baseUrl = "http://localhost:3000/api/v1";
/**
 * Login
 */

export const Login = ({ navigation }) => {
    const [loggedin, setLoggedin] = useState(false);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        email: "",
        password: "",
    });

    // login existing user
    const login = async (user) => {
        const url = `${baseUrl}/auth/signin`;
        const { data } = await axios.post(url, user);

        if (data.message === "login") {
            setLoggedin(true);
            await AsyncStorage.setItem("loginToken", JSON.stringify(data.loginToken));
            navigation.navigate("Home");
        }
        else {
            setError({ email: 'wrong email or password', password: 'wrong email or password' })
        }
    };

    //validate error
    const handleLogin = () => {
        if (!user?.email?.length) {
            setError((prevError) => ({
                ...prevError,
                email: "please enter your email",
            }));
        } else if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email) == false
        ) {
            setError((prevError) => ({
                ...prevError,
                email: "please enter valid email ",
            }));
        }

        if (!user?.password?.length) {
            setError((prevError) => ({
                ...prevError,
                password: "please enter your password",
            }));
        } else {
            login(user);
        }
    };

    return (
        <Screen style={styles.screen}>
            <NavigationButton
                text="Register"
                onPress={() => navigation.navigate("Register")}
            />

            <View style={styles.container}>
                <Logo style={{ alignSelf: "center" }} />
                <Text style={styles.title}>Sarahah</Text>

                <Input
                    onChange={(email) => {
                        setUser((prevState) => ({
                            ...prevState,
                            email: email.toLowerCase(),
                        }));
                        setError((prevError) => ({ ...prevError, email: "" }));
                    }}
                    icon={faEnvelope}
                    placeholder="Email"
                />
                <Text style={styles.error}>{error.email}</Text>
                <Input
                    onChange={(password) => {
                        setUser((prevState) => ({ ...prevState, password }));
                        setError((prevError) => ({ ...prevError, password: "" }));
                    }}
                    icon={faLock}
                    placeholder="Password"
                />
                <Text style={styles.error}>{error.password}</Text>
            </View>
            <MainButton onPress={() => handleLogin()} text="Login" />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: 30,
        padding: 0,
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
