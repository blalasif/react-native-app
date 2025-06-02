import { Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const FirstTab = () => {
  return (
    <View>
      <Text>firstTab</Text>
      <Ionicons name="home-sharp" size={50} color={"green"} />
      <Text className="text-2xl text-green-300 mt-4">First Tab Content</Text>
    </View>
  );
};

export default FirstTab;
