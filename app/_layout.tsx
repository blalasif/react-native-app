import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type color = {
  color: string;
};

const Layout = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home Screen",

            drawerIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          options={{
            drawerLabel: "About",
            title: "About Screen",
            drawerIcon: ({ color }) => (
              <Ionicons name="information" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="tabs"
          options={{
            drawerLabel: "Setting",
            title: "Setting Screen",
            drawerIcon: ({ color }) => (
              <Ionicons name="settings" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
