import { TouchableOpacity, StyleSheet, Text, View, Platform } from "react-native"

export const MainButton = ({ text, onPress, style }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => onPress()} style={[style, styles.button]}>
                <Text style={styles.buttonText} >{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#10bbb3',
        fontSize: 30,
        fontWeight: '700',
        backgroundColor: '#fff',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        height: 50,
        borderRadius: 40,
        backgroundColor: '#fff',
        margin: 20
    },
    buttonContainer: {
        marginTop: 'auto',
        paddingBottom: `${Platform.OS === 'android' ? '12%' : '0%'}`

    }
})
