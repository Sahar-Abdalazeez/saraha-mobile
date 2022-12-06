import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import LottieView from 'lottie-react-native';
//icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
//lottie
import noMessage from "../assets/animations/noMessage.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Screen, Header } from '../components';
const platform = Platform.OS;
//api url 
const url =
    platform === "android"
        ? "http://10.0.2.2:3000/api/v1/message"
        : "http://localhost:3000/api/v1/message";



export const RecievedMessages = ({ route }) => {
    let [messages, setMessages] = useState([]);
    const token = route.params.userToken;
    //function to get recieved messages
    const getUserMessages = async () => {
        if (token?.length) {
            axios
                .get("http://localhost:3000/api/v1/message", {
                    headers: {
                        authorization: `tariq__${token}`,
                    },
                })
                .then((res) => {
                    console.log('res', res)
                    setMessages(res.data.messageList);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log("login first ");
        }
    };
    useEffect(() => {
        getUserMessages();
    }, [])
    // if (token?.length) {
    //     console.log('hello')
    //     await axios
    //         .get(`${url}/message/`, {
    //             headers: {
    //                 authorization: `tariq__${token}`,
    //             },
    //         })
    //         .then((res) => {
    //             console.log('res', res)
    //             setMessages(res.data.messageList);
    //         })
    //         .catch((error) => {
    //             console.error('error', error);
    //         });
    // } else {
    //     console.log("login first ");
    // }




    // console.log('messages', messages);
    // //delete message
    // const deleteMessage = (messageId) => {
    //     // Simple DELETE request with axios
    //     axios
    //         .delete(`${url}/message/${messageId}`, {
    //             headers: {
    //                 authorization: `tariq__${userToken}`,
    //             },
    //             params: {
    //                 authorization: `tariq__${userToken}`,
    //             },
    //         })
    //         .then((res) => console.log("delete result", res))
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };
    // console.log('useerrrrrr', userToken);
    // console.log('messages ', messages);

    // useEffect(() => {
    //     getUserMessages()
    // }, []);


    return (
        <Screen style={styles.screen}>
            <Header />
            {/* <View style={styles.mainContainer}>
                {token?.length ? (
                    <>
                        <View style={styles.title}>
                            <Text> {messages.length ? "Messages" : "No messages found "}</Text>
                        </View>

                        {messages?.length ? (
                            messages?.map((item, _index) => {
                                const creationTime = item.createdAt;
                                const time = moment
                                    .utc(new Date(creationTime), "MM/DD/YYYY h:mm A")
                                    .local()
                                    .format("DD,MMMM , hh:mm A");

                                return (
                                    <View style={styles.container}>
                                        <View style={styles.messageContainer}>
                                            <View><Text>{item.text}</Text> </View>
                                            <TouchableOpacity
                                                onClick={() => deleteMessage(item._id)}
                                                style={styles.icon}
                                            >
                                                <FontAwesomeIcon
                                                    size="x"
                                                    icon={faTrash}
                                                    color="#10bbb3"
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.time}><Text> {time}</Text> </View>
                                    </View>
                                );
                            })
                        ) :
                            (
                                <View style={styles.noMessageFound}>
                                    <LottieView style={{ alignSelf: 'center', width: 200, height: 200 }} source={noMessage} autoPlay loop />

                                </View>
                            )
                        }
                    </>
                ) :
                    (
                        <View style={styles.shouldLogin}>
                            <View style={styles.title}>
                                <Text> Login, to see the incoming messages</Text>
                            </View>
                            {/* <Link
                        tso="/login"
                        data-toggle="modal"
                        data-target="#share"
                        className="btn btn-default-outline share my-5"
                    >
                        <i className="fas fa-share-alt" /> Login
                    </Link> 
                        </View>
                    )

                }
            </View> */}
        </Screen>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        display: "flex",
        width: "60%",
        border: "thin solid #10bbb3 ",
        borderRadius: 30,
        minHeight: 140,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 3,
        padding: 30,
        textAlign: "left",
        fontWeight: "500",
        fontSize: 20,
        color: "gray",
        alignItems: "center",
        justifyContent: "center",
    },
    mainContainer: {
        disply: "flex",
        flex: 1,
        height: "100%",
        boxSizing: "borderBox",
        paddingRight: "20%",
        paddingLeft: "20%",
        paddingTop: "5%",
    },
    container: {
        marginBottom: 30,
        display: "flex",
        flexDirection: "column",
    },
    time: {
        color: "gray",
        fontSize: 14,
        marginTop: 5,
    },
    title: {
        color: "#10bbb3",
        fontSize: 40,
        marginBottom: 30,
        fontWeight: "600",
        textAlign: "center",
    },
    icon: {
        marginLeft: "auto",
        backgroundColor: "transparent",
        border: "none",
    },
    shouldLogin: {
        display: "flex",
        flexDirection: "column",
    },
    noMessageFound: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
});
