import { View, StyleSheet, Platform, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

export const Header = ({ title }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{title}</Text>
            <FontAwesomeIcon style={styles.icon} icon={faEnvelope} color="#fff" size="35" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: "#10bbb3",
        height: 60,
        marginTop: `${Platform.OS === 'android' ? '5%' : '0%'}`,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginRight: 20, transform: [{ rotate: "-10deg" }], marginLeft: 'auto'
    },
    title: {
        color: 'white',
        fontSize: 26,
        fontWeight: '700',
        marginLeft: '40%'
    }
})
