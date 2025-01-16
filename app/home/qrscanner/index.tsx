import { Platform, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native";
import Camera from "./Camera";
import { Stack } from "expo-router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationsList } from "@/app/NavigationsList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { Colors } from "@/constants/Colors";

type QRScannerScreenProps = NativeStackScreenProps<
  NavigationsList,
  "QRScanner"
>;

export default function QRScannerScreen({ navigation }: QRScannerScreenProps) {
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "transparent",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerLeft(props) {
            return null;
          },
          headerTitle: "eUniver QR",
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "GoogleSansMedium",
            color: Colors[theme].text,
          },
          headerRight(props) {
            return (
              <Pressable
                style={{
                  padding: 5,
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(0,0,0,0.15)",
                  borderRadius: 10,
                  marginHorizontal: 10
                }}
                onPress={() => navigation.goBack()}
              >
                <MaterialCommunityIcons name="close" size={24} color="white" />
              </Pressable>
            );
          },
        }}
      />
      <Camera />
    </SafeAreaView>
  );
}
