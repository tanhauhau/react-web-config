import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Config from 'react-native-config'

const App = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.title}>react-web-config</Text>
      <Text style={Style.desc}>Platform: {Platform.OS}</Text>
      {
        Object.keys(Config).map(key => (
            <Text key={key} style={Style.desc}>{key}: {Config[key]}</Text>
        ))
      }
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 60
  },
  title: {
    fontSize: 30,
    paddingBottom: 16
  },
  desc: {
    fontSize: 22,
    color: '#222222'
  }
})

export { App }
