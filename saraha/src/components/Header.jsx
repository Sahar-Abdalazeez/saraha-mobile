import { View, StyleSheet, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

export const Header = () => {
    return (
        <View style={styles.container} >
            <FontAwesomeIcon style={styles.icon} icon={faEnvelope} color="#fff" size="35" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        backgroundColor: "#10bbb3",
        height: 60,
        marginTop: `${Platform.OS === 'android' ? '5%' : '0%'}`,
        justifyContent: 'center'
    },
    icon: {
        marginLeft: 'auto', marginRight: 20, transform: [{ rotate: "-10deg" }]
    }
})
