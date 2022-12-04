import { useState, useEffect } from 'react';
import axios from 'axios'

import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";

import { Text, StyleSheet, View, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { Header, IconButton } from '../components';


export const Modal = () => {
    return (
        <View style={styles.modal}>
            <View style={styles.container} ></View>
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
        // marginTop: 'auto'

    },
    container: {
        width: '100%',
        height: '70%',
        marginTop: 'auto',
        backgroundColor: '#fff'

    }
})