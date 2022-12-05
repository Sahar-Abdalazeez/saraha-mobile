import { useState, useEffect } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LottieView from 'lottie-react-native';

import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";

import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { Header, IconButton, MainButton } from '../components';


export const Modal = ({ onContinuePressed, title, subTitle, onHide, animation }) => {
    return (
        <View style={styles.modal}>
            <View style={styles.container} >
                <TouchableOpacity style={styles.button} onPress={() => onHide()} >
                    <FontAwesomeIcon icon={faX} />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
                <LottieView style={{ alignSelf: 'center', width: 200, height: 200 }} source={animation} autoPlay loop />
                <MainButton text="Continue" style={styles.mainButton} onPress={() => onContinuePressed()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'rgba(180, 180, 180,0.7)',
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 1,

    },
    container: {
        width: '100%',
        height: '80%',
        marginTop: 'auto',
        backgroundColor: '#fff',
        padding: 10,
        paddingBottom: 30,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },

    title: {
        fontWeight: '600',
        fontSize: 30,
        color: '#10bbb3',
        marginTop: 20,
        textAlign: 'center'
    },
    subTitle: {
        fontWeight: '500',
        fontSize: 26,
        color: '#10bbb3',
        textAlign: 'center',
        marginBottom: 10,

    },

    button: {
        padding: 5,
        alignSelf: 'baseline',
        marginLeft: 'auto',

    },
    mainButton: {
        borderWidth: 1,
        borderColor: '#10bbb3',
    },
    buttonContainer: {
        marginTop: 'auto',
        paddingBottom: 20,
    }
})