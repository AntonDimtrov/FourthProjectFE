import { StatusBar } from 'expo-status-bar';
import { Text,View,Pressable,StyleSheet,Image } from 'react-native';

export default function FirstTexts() {
    return (
        <View>
            <Text style={styles.titleText}>
            Drive the Future
            </Text>
            <Text style={styles.bodyText}>
            Discover a wide selection, combining cutting-edge technology, elegant design, and zero-emissions
            </Text>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleText:{
      color: "pink",
      fontSize: 40,
      marginTop: 15,
      marginHorizontal: 16,
      fontWeight: "700",
    },
    bodyText:{
      color: "black",
      fontSize: 20,
      marginTop: 12,
      marginHorizontal: 16,
    },
});
  