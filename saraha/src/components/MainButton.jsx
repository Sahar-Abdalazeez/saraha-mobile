import { TouchableOpacity, StyleSheet, Text } from "react-native"

export const MainButton = ({ text }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} >{text}</Text>
        </TouchableOpacity>
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
    }
})
