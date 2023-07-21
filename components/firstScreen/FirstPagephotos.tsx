import { StatusBar } from 'expo-status-bar';
import { Text,View,Pressable,StyleSheet,Image } from 'react-native';

export default function FirstPagePhotos() {
    return (
        <Image
            source={require('../../assets/firstphoto.png')}
        />
    )
};