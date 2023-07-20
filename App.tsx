import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('./assets/firstphoto.png')}
      />
      <Text style={styles.titleText}>
        Drive the Future
      </Text>
      <Text style={styles.bodyText}>
        Discover a wide selection, combining cutting-edge technology, elegant design, and zero-emissions
      </Text>
      <View style={styles.buttons}>
        <Pressable style={styles.getStartedButton}>
          <Text style={styles.getStartedbuttonText}>Get started</Text>
        </Pressable>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>
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
