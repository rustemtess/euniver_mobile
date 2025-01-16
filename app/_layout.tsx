import React, { useContext, useEffect, useState, useCallback } from "react";
import { Button } from "react-native";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
  StatusBar,
} from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "./auth";
import NotFoundScreen from "./+not-found";
import { router, Stack } from "expo-router";
import { NavigationsList } from "./NavigationsList";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import { Colors } from "@/constants/Colors";
import ThemeProvider, { ThemeContext } from "@/providers/ThemeProvider";
import SettigsScreen from "./settings";
import HomeScreen from "./home";
import QRScannerScreen from "./home/qrscanner";
import "../global.css";
import NotificationsScreen from "./home/notifications";
import ProfileScreen from "./home/profile";
import ServicesScreen from "./home/services";

// Предотвращаем автоматическое скрытие SplashScreen до загрузки ресурсов
SplashScreen.preventAutoHideAsync();
const StackNavigator = createStackNavigator<NavigationsList>();

export default function RootLayout() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    VKSansMedium: require("../assets/fonts/vksans/VKSansDisplay-Medium.ttf"),
    VKSansRegular: require("../assets/fonts/vksans/VK_Sans_Display_Regular.ttf"),
    GoogleSansRegular: require("../assets/fonts/googlesans/GoogleSans-Regular.ttf"),
    GoogleSansMedium: require("../assets/fonts/googlesans/GoogleSans-Medium.ttf"),
  });

  const loadTheme = useCallback(async () => {
    try {
      // Сюда можно что то загрузить через await
    } finally {
      SplashScreen.hideAsync();
    }
  }, [setTheme]);

  useEffect(() => {
    if (fontsLoaded) {
      loadTheme();
    }
  }, [fontsLoaded, loadTheme]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <StackNavigator.Navigator
        id={undefined}
        initialRouteName="Auth"
        screenOptions={{
          headerMode: 'screen',
          headerShown: false,
          headerShadowVisible: false,
          animation: 'none',
        }}
      >
        <StackNavigator.Screen name="Auth" component={AuthScreen} />
        <StackNavigator.Screen name="Settings" component={SettigsScreen} options={{
          animation: 'slide_from_right'
        }} />
        <StackNavigator.Screen name="Home" component={HomeScreen} />
        <StackNavigator.Screen name="Profile" component={ProfileScreen} />
        <StackNavigator.Screen name="Services" component={ServicesScreen} />
        <StackNavigator.Screen name="QRScanner" component={QRScannerScreen} />
        <StackNavigator.Screen name="Notifications" component={NotificationsScreen} />
      </StackNavigator.Navigator>
    </ThemeProvider>
  );
}
