import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/providers/ThemeProvider";
import { styles } from "@/styles/style";
import { Stack } from "expo-router";
import { useContext } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Rating from '@/assets/icons/rating.svg';

export default function ServicesScreen() {

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
                  title: "Сервисы",
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
              <View className="grid grid-cols-3 gap-3 w-full px-4 py-5">
                <TouchableOpacity className="flex flex-col gap-2 items-center" style={{
                    alignSelf: 'flex-start'
                }}>
                    <Rating width={60} height={60} />
                    <Text style={{
                        fontSize: 15,
                        color: Colors[theme].text,
                        fontFamily: 'VKSansRegular'
                    }}>Успеваемость</Text>
                </TouchableOpacity>
              </View>
        </SafeAreaView>
    );
}