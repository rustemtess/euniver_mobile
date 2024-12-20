import { Stack } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
}
