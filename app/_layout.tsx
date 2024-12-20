import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Button, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./home";
import NotFoundScreen from "./+not-found";
import AuthScreen from "./auth";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    VKSansMedium: require("../assets/fonts/vksans/VKSansDisplay-Medium.ttf"),
    VKSansRegular: require("../assets/fonts/vksans/VK_Sans_Display_Regular.ttf"),
    GoogleSansRegular: require("../assets/fonts/googlesans/GoogleSans-Regular.ttf"),
    GoogleSansMedium: require("../assets/fonts/googlesans/GoogleSans-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Drawer = createDrawerNavigator();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator initialRouteName="auth">
        <Drawer.Screen name="auth" component={AuthScreen} />
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="+not-found" component={NotFoundScreen} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
