import { StatusBar } from 'expo-status-bar';
import { Text,View,Pressable,StyleSheet,Image } from 'react-native';

export default function FirstPageButtons() {
    return (
        <View style={styles.buttons}>
            <Pressable style={styles.getStartedButton}>
                <Text style={styles.getStartedbuttonText}>Get started</Text>
            </Pressable>
            <Pressable style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttons: {
        alignItems: 'center'
    },
    getStartedButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 361,
        height: 48,
        backgroundColor: '#F0EDFF',
        borderRadius: 50,
        marginTop: 44,
    },
    getStartedbuttonText:{
        color:"#333",
        fontSize: 20,
        fontWeight: 'bold',
    },
    loginButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 361,
        height: 48,
        marginTop: 4,
    },
    loginButtonText:{
        color:"black",
        fontSize: 16,
    },
});