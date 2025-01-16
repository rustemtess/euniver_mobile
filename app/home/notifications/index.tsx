import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/providers/ThemeProvider";
import { styles } from "@/styles/style";
import { Stack } from "expo-router";
import { useContext } from "react";
import { SafeAreaView } from "react-native";

export default function NotificationsScreen() {

    const { theme } = useContext(ThemeContext);

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
                  title: "Уведомления",
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
        </SafeAreaView>
    );
}