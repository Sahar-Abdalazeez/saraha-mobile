import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export const IconButton = ({ text, icon, onPress }) => {
    return (

        <TouchableOpacity onPress={() => onPress()} style={styles.container}>
            <FontAwesomeIcon icon={icon} size={16} color="#fff" />
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#10bbb3',
        alignSelf: 'baseline',
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        marginLeft: 5,
    }
})