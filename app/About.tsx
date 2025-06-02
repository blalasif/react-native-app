import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
// import AnimatedLayout from "../components/AnimatedLayout";

export default function About() {
  const router = useRouter();
  const handleAnimation = () => {
    router.push("/");
  };

  return (
    <>
      <Text>About Page</Text>
      <Pressable onPress={handleAnimation}>
        <Text className="bg-blue-900">Go Back</Text>
      </Pressable>
    </>
  );
}
