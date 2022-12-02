import { StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
export const Logo = ({ style }) => {
    return (
        <View style={[styles.container, style, {
            transform: [{ rotate: "-10deg" }]
        }]}>
            <FontAwesomeIcon icon={faEnvelope} style={{ backgroundColor: '#10bbb3', }} size={100} color="#fff" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'baseline',
    }
})

