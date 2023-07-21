
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import FirstPagePhotos from './components/firstScreen/FirstPagephotos';
import FirstTexts from './components/firstScreen/FirstTexts';
import FirstPageButtons from './components/firstScreen/FirstPageButtons';
import React from 'react';

export default function App() {
  return (
    //  <GestureHandlerRootView style>
      <View>
      <FirstPagePhotos />
      <FirstTexts />
      <FirstPageButtons />
      </View>
    // </GestureHandlerRootView>
  );
}

