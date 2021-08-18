import React from "react";
import { StyleSheet, Text, View, Image, Platform, StatusBar, SafeAreaView, Alert, Button } from "react-native";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text >hello react native</Text>
      <Image blurRadius={10} fadeDuration={1000} source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 200, height: 200}} />
       <Button title="Click me" onPress={() => Alert.prompt("My title", "My message", text => console.log(text))} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
