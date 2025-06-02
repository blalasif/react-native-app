// components/AnimatedLayout.tsx
import React, { ReactNode, useEffect } from "react";
import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

type AnimatedLayoutProps = {
  children: ReactNode;
  animateIn?: boolean;
  onAnimationEnd?: () => void;
};

export default function AnimatedLayout({
  children,
  animateIn = true,
  onAnimationEnd,
}: AnimatedLayoutProps) {
  const translateX = useSharedValue(animateIn ? width : 0);

  useEffect(() => {
    translateX.value = withTiming(
      animateIn ? 0 : width,
      { duration: 700 },
      (finished) => {
        if (finished && !animateIn && onAnimationEnd) {
          runOnJS(onAnimationEnd)();
        }
      }
    );
  }, [animateIn]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      {children}
    </Animated.View>
  );
}
