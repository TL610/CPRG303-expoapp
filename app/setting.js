//rnfe

import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Setting = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyItems: "center" }}>
      <Text style={{ fontsize: 20 }}>Setting</Text>
      <Link href="/profile">Go to profile</Link>
    </View>
  );
};

export default Setting;
