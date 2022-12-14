import { useState, useEffect } from 'react';
import axios from 'axios'
import MessageSuccess from '../assets/animations/messageSent.json'
//icon
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
//compnents 
import { Text, StyleSheet, View, TextInput, SafeAreaView, StatusBar, ScrollView, Platform, Keyboard } from 'react-native';
import { Header, IconButton, Modal } from '../components';
const platform = Platform.OS;
//api url 
const url =
    platform === "android"
        ? "http://10.0.2.2:3000/api/v1"
        : "http://localhost:3000/api/v1";

export const SendMessage = ({ navigation, route }) => {
    const { id, name } = route.params;
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    console.log('id,name', id, name)
    //send message function
    const handleSend = async () => {
        let { data } = await axios.post(
            `${url}/message/${id}`,
            { text: message }
        );
        // console.log('======data', data);
        if (data.message == "Dnoe ") {
            setSuccess(true);
        } else {
            setSuccess(false);
        }
        keyboardShouldPersistTaps = 'handled'

    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#10bbb3" }}>
                <StatusBar barStyle={'light-content'} />

                <ScrollView keyboardShouldPersistTaps='handled'
                    style={styles.container} >
                    <Header />

                    <Text style={styles.title}>Send a constructive message </Text>
                    <TextInput
                        selectionColor={'#10bbb3'}
                        style={styles.textarea}
                        multiline={true}
                        onChangeText={(text) => setMessage(text)}
                    />
                    <IconButton text='Send' icon={faPen} onPress={() => { Keyboard.dismiss(); handleSend(); }} />
                </ScrollView >
            </SafeAreaView >

            {success ? <Modal onHide={() => { setSuccess(false); }} animation={MessageSuccess} style={styles.modal} title="Congratulations ????" subTitle='Message Sent Successfully' onContinuePressed={() => navigation.navigate('Users')} /> : null}
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#eff2f5',
        flex: 1,
    },
    title: {
        fontSize: 22,
        marginTop: 20,
        color: '#10bbb3',
        textAlign: 'center',
        fontWeight: '700',
    },
    textarea: {
        minHeight: 200,
        margin: 30,
        backgroundColor: 'yellow',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#10bbb3',
        backgroundColor: '#fff',
        fontWeight: '500',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingVertical: 200
    },
    send: {
        marginLeft: "auto",
        border: "none",
        outline: "none",
        padding: 0,
        backgroundColor: "transparent",
    },
})