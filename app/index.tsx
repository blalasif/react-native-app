// app/index.tsx
import { useDrawerStatus } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import "../global.css";

export default function Index() {
  const isDrawerOpen = useDrawerStatus() === "open";
  const navigateWithAnimation = () => {
    // Navigate *after animation* from AnimatedLayout
    router.push("/About");
  };

  return (
    <>
      <Text className="text-green-800">Home Page</Text>
      <Pressable onPress={navigateWithAnimation}>
        <Text>Go to the About Screen</Text>
        {isDrawerOpen ? (
          <Text className="text-3xl text-green-300 mt-4">Drawer is Open</Text>
        ) : (
          <Text className="text-3xl text-red-800 mt-4">Drawer is Closed</Text>
        )}
      </Pressable>
      <Pressable onPress={() => router.push("/tabs")}>
        <Text>Go to Tab Screen</Text>
      </Pressable>
      <Pressable
        className="bg-indigo-500  text-center w-[100%]"
        onPress={() => router.push("/UserInfo")}
      >
        <Text>Go to User Info Screen</Text>
      </Pressable>
      <Pressable
        className="bg-pink-500 p-4 rounded-lg  text-center w-[100%]"
        onPress={() => router.push("/profile")}
      >
        <Text>Go to Profile </Text>
      </Pressable>
    </>
  );
}
