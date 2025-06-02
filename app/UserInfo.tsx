import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function UserInfoScreen() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleNavigation = () => {
    const username = name.trim();
    if (username) {
      router.push(`/${username}`);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-2xl text-blue-600 mb-4">UserInfo</Text>

      <TextInput
        placeholder="Type Your Name"
        value={name}
        onChangeText={setName}
        className="border border-gray-400 rounded-md w-full p-3 text-lg"
      />

      <Pressable
        className="rounded-xl w-full p-3 mt-5 bg-black"
        onPress={handleNavigation}
      >
        <Text className="text-white text-center text-lg">Go</Text>
      </Pressable>
    </View>
  );
}
