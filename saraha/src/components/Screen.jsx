import React from 'react';

import { View, ScrollView, StyleSheet, KeyboardAvoidingView, SafeAreaView, StatusBar, Platform } from 'react-native';

export const Screen = ({ children, style, safeAreaColor }) => {
    const platform = Platform.OS;
    return (
        <KeyboardAvoidingView
            //to show the button above the keyboard
            behavior={'padding'}
            style={{ marginTop: 'auto', height: '100%' }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: `${safeAreaColor}` }}>
                <StatusBar barStyle={'dark-content'} />
                <ScrollView
                    //fix the issue of pressing button twice 
                    keyboardShouldPersistTaps='always'
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={[styles.container, style]} >
                        {children}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#10bbb3',
    }
})

