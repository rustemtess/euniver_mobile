import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/providers/ThemeProvider";
import { stylesSettings } from "@/styles/settings.style";
import { styles } from "@/styles/style";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useContext, useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettigsScreen() {
  const { setTheme, theme, isDark } = useContext(ThemeContext);
  const toggleSwitch = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <SafeAreaView
      style={[
        styles.screenLayout,
        {
          backgroundColor: Colors[theme].background,
          justifyContent: "flex-start",
        },
      ]}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Настройки",
          headerLargeTitle: false,
          headerTintColor: Colors[theme].text,
          headerBackButtonDisplayMode: "minimal",
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerTitleStyle: {
            color: Colors[theme].text,
          },
        }}
      />
      <View style={stylesSettings.button}>
        <View style={stylesSettings.buttonContent}>
          <MaterialCommunityIcons
            style={stylesSettings.buttonIcon}
            name="theme-light-dark"
            size={24}
            color={Colors[theme].textSecondary}
          />
          <Text
            style={[
              stylesSettings.buttonText,
              {
                color: Colors[theme].textSecondary,
              },
            ]}
          >
            Темная тема
          </Text>
        </View>
        <TouchableOpacity onPress={toggleSwitch} style={{
          padding: 10,
          paddingVertical: 6,
          paddingBottom: 8,
          paddingRight: 12,
          borderRadius: 10,
          backgroundColor: Colors[theme].switchBackground
        }} hitSlop={{
          top: 10,
          bottom: 10,
          left: 10,
          right: 10
        }}>
          <Text style={{
            color: Colors[theme].switchButton,
            fontFamily: 'VKSansMedium',
            fontSize: 16
          }}>{isDark ? 'OFF' : 'ON'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
