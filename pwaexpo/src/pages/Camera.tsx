import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';

const Camera: React.FC = () => {
  return <View style={{ flex: 1}}>
    <ExpoCamera style={{ flex: 1}} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});

export default Camera;