import React, { useState } from "react";
//icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
//animation 
import Success from "../assets/animations/registeredSuccess.json";
//components
import { View, Text, StyleSheet, Platform } from "react-native";
import {
    Screen,
    Input,
    Logo,
    MainButton,
    NavigationButton,
    Modal,
} from "../components";
//axios
import axios from "axios";

/**
 *  Register
 */
const platform = Platform.OS;
//api url 
const url =
    platform === "android"
        ? "http://10.0.2.2:3000/api/v1/auth/signup"
        : "http://localhost:3000/api/v1/auth/signup";

export const Register = ({ navigation }) => {
    //state for showing the modal 
    const [showModal, setShowModal] = useState(true);

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
    //check if all fields have value 
    const allFieldsFilled = !!(
        user?.userName?.length &&
        user?.email?.length &&
        user?.password?.length &&
        user?.cpassword?.length
    );
    // check if all fields have valid value 
    const fieldsValid =
        !error.userName?.length &&
        !error.email?.length &&
        !error.password?.length &&
        !error.cpassword?.length;

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
        }
        if (
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
        }
        if (!user?.cpassword?.length) {
            setError((prevError) => ({
                ...prevError,
                cpassword: "please confirm your password",
            }));
        }
        if (
            user.password !== user.cpassword &&
            password.length &&
            cpassword.length
        ) {
            setError((prevError) => ({
                ...prevError,
                cpassword: "passwrod and confirm passwrod don't match",
            }));
        }
        //if all fields are filled and no invalid values call the api when the butto is pressed 
        if (allFieldsFilled && fieldsValid) {

            let { data } = await axios.post(url, user);
            console.log("data", data);

            if (data.message === "done") {
                setShowModal(true);
            } else {
                setShowModal(false);
                alert(data?.message);
            }
        }
    };

    return (
        <Screen style={styles.screen} safeAreaColor='#fff'>
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

            {showModal ? (
                <Modal
                    subTitle={"Registered Successfully"}
                    title={"Congratulations"}
                    animation={Success}
                    onHide={() => setShowModal(false)}
                    onContinuePressed={() => navigation.navigate('Users')}
                />
            ) : null}
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {

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
        marginBottom: 10,
        textAlign: "center",
    },
    error: {
        fontSize: 14,
        color: "red",
        marginBottom: 8,
        marginLeft: 15,
    },
});
