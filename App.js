import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-beetween'
      }}>
        <TextInput style={{borderBottomColor: 'black', borderWidth: 1}} />
          <Button title="Agregar" />
      </View>

      <View></View>
      <Text>Hola Coder! Este es el proyecto de Mathias Rizzi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
