//naming convention +filename
// rnfe

// "/" back to home page
import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Notfound = () => {
  return (
    <View>
      <Text style={{ fontSize: "20", color: "red" }}>
        Opps! Screen does not exist
      </Text>
      <Link style={{ fontSize: "20", color: "green" }} href="/">
        Go to the Home Screen
      </Link>
    </View>
  );
};

export default Notfound;
