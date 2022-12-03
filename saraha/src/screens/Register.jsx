import React, { useState } from "react";
//icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson";
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
//api function
import { register } from "../queries/user.query";

/**
 *  Register
 */
export const Register = ({ navigation }) => {
    const [registered, setRegistered] = useState(false);
    const [message, setMessage] = useState(false);

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        cpassword: "",
    });
    const [error, setError] = useState({
        userName: "",
        email: "",
        password: "",
        cpassword: "",
    });

    //validate error
    const fieldValidation = async () => {
        if (!user?.userName?.length) {
            setError((prevError) => ({
                ...prevError,
                userName: "please enter your userName",
            }));
        }
        if (!user?.email?.length) {
            setError((prevError) => ({
                ...prevError,
                email: "please enter your email",
            }));
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email) == false) {
            setError((prevError) => ({
                ...prevError,
                email: 'please enter valid email '
            }));
        }

        if (!user?.password?.length) {
            setError((prevError) => ({
                ...prevError,
                password: "please enter your password",
            }));
        }
        if (!user?.cpassword?.length) {
            setError((prevError) => ({
                ...prevError,
                cpassword: "please confirm your password",
            }));
        } else if (user.password !== user.cpassword) {
            setError((prevError) => ({
                ...prevError,
                cpassword: "passwrod and confirm passwrod don't match",
            }));
        }

        else {
            try {
                // await AsyncStorage.setItem("user", JSON.stringify(value));
                const result = register(user);
                if (result.message === "done") {
                    setRegistered(true);
                }
                else {
                    setRegistered(true);
                    setMessage(result.message);
                }

            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <Screen style={styles.screen}>
            <NavigationButton
                text="Login"
                onPress={() => navigation.navigate("Login")}
            />

            <View style={styles.container}>
                <Logo style={{ alignSelf: "center" }} />
                <Text style={styles.title}>Sarahah</Text>

                <Input
                    onChange={(userName) => {
                        setUser({ userName });
                        setError((prevError) => ({ ...prevError, userName: "" }));
                    }}
                    icon={faPerson}
                    placeholder="Username"
                />
                <Text style={styles.error}>{error.userName}</Text>
                <Input
                    onChange={(email) => {
                        setUser((prevState) => ({ ...prevState, email: email.toLowerCase() }));
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
                <Input
                    onChange={(cpassword) => {
                        setUser((prevState) => ({ ...prevState, cpassword }));

                        setError((prevError) => ({ ...prevError, cpassword: "" }));
                    }}
                    icon={faLock}
                    placeholder="Confirm Password"
                />
                <Text style={styles.error}>{error.cpassword}</Text>
            </View>

            <MainButton text="Register" onPress={() => fieldValidation()} />
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
