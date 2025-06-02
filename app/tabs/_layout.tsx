import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useWindowDimensions, View } from "react-native";
import { TabBar, TabBarProps, TabView } from "react-native-tab-view";

import FirstTab from "./firstTab";
import SecondTab from "./secondTab";
type Route = {
  key: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const routes: Route[] = [
  { key: "first", title: "First Tab", icon: "home" },
  { key: "second", title: "Second Tab", icon: "information-circle" },
];

export default function TabScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const renderTabBar = (props: TabBarProps<Route>) => (
    <TabBar
      {...(props as any)}
      renderLabel={({ route, color }: { route: Route; color: string }) => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name={route.icon}
            size={20}
            color={color}
            style={{ marginRight: 8 }}
          />
        </View>
      )}
      indicatorStyle={{ backgroundColor: "green" }}
      style={{
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
      }}
      activeColor="green"
      inactiveColor="gray"
      labelStyle={{ fontSize: 12 }}
    />
  );

  const renderScene = ({ route }: { route: Route }) => {
    switch (route.key) {
      case "first":
        return <FirstTab />;
      case "second":
        return <SecondTab />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}
