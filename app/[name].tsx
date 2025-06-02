import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
export function Head() {
  const { name } = useLocalSearchParams();
  return <title>{`Welcome, ${name}`}</title>;
}
const DynamicScreen = () => {
  const { name } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: ` ${name}`,
    });
  }, [name]);

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-3xl text-green-600">Welcome , {name}</Text>
      <Text className="text-xl  mt-4">This is your Personalized Screen</Text>
    </View>
  );
};

export default DynamicScreen;
