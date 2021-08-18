import React from 'react';
import { View, SafeAreaView, Text} from "react-native"

function HomeScreen(props) {
    return (
        <SafeAreaView>
        <Text>Home page</Text>
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

export default HomeScreen; 