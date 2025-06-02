import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const ProfileScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl text-pink-700">Profile</Text>
      <Pressable
        onPress={() => router.push("/profile/Setting")}
        className="bg-pink-500 rounded-lg p-4 mt-4"
      >
        <Text className="text-white text-center">GO to settings</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
