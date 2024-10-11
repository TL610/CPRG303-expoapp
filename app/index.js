import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground } from "react-native";
import { TextInput } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{ uri: "https://picsum.photos/200/300" }}
      >
        <View style={styles.main}>
          <Text style={{ fontSize: 36, color: "white" }}>LOGIN PAGE</Text>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Password" />
          <Text style={styles.title}>Home Page</Text>
          <Text>This is the first page of your app.</Text>
          <Text style={styles.subtitle}>
            This is the first page of your app.
          </Text>
          <Link style={styles.subtitle} href="/setting">
            Go to the next page
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "red",
    textDecorationLine: "underline",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 16,
    backgroundColor: "#FFF",
    borderRadius: 4,
    padding: 8,
  },
});
