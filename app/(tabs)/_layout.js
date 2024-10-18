//rnfe
import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "blue",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="profile" options={{ title: "Profile", href: null }} />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="settings/index" options={{ title: "Settings" }} />
    </Tabs>
  );
};

export default _layout;

// //rnf - react native functional component
// import { View, Text } from "react-native";
// import React from "react";
// import { Stack } from "expo-router";

// export default function _layout() {
//   return (

//     <Stack>
//       <Stack.Screen
//         name="index"
//         options={{
//           title: "Home",
//           headerStyle: { backgroundColor: "coral" },
//           headerTitleStyle: { fontweight: "600" },
//           headerTintColor: "Cyan",
//         }}
//       />
//       <Stack.Screen name="setting" options={{ title: "About me" }} />
//       <Stack.Screen name="profile" options={{ title: "Profile" }} />
//     </Stack>
//   );
// }
