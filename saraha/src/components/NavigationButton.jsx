import { TouchableOpacity, StyleSheet, Text } from "react-native"

export const NavigationButton = ({ text }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 40,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        backgroundColor: '#fff',
        alignSelf: 'baseline',
        overflow: 'hidden',
        padding: 8,
    },
    buttonText: {
        color: '#10bbb3',
        fontSize: 18,
        fontWeight: '700',
        backgroundColor: '#fff',
    },

})
