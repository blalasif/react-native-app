import { Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const SecondTab = () => {
  return (
    <View>
      <Text>Second Tab</Text>
      <Ionicons name="information" size={50} color={"red"} />
      <Text className="text-2xl text-green-300 mt-4">Second Tab Content</Text>
    </View>
  );
};

export default SecondTab;
