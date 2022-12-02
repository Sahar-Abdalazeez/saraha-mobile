import { TextInput, StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export const Input = ({ icon, placeholder, onChange }) => {
    return (
        <View style={styles.container}>
            {icon ? <FontAwesomeIcon style={styles.icon} icon={icon} size={25} color="lightgray" /> : null}
            <TextInput onChangeText={(text) => onChange(text)} autoFocus={false} selectionColor={'#10bbb3'}
                placeholder={placeholder} style={styles.input} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        paddingRight: 30,
        marginBottom: 20,

    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#fff',
        fontSize: 16,
        alignSelf: 'center',
    },

    icon: {
        marginRight: 5
    }
})

