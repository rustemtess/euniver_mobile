import { router, Stack } from "expo-router";
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  NativeStackNavigatorProps,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { NavigationsList } from "../NavigationsList";
import { useTheme } from "@react-navigation/native";
import { styles } from "@/styles/style";
import { Colors } from "@/constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import Logo from '@/assets/icons/Logo.svg';

type AuthScreenProps = NativeStackScreenProps<NavigationsList, "Auth">;

export default function AuthScreen({ navigation }: AuthScreenProps) {
  const { isDark, theme, setTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[
        styles.screenLayout,
        {
          backgroundColor: Colors[theme].background,
        },
      ]}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerTitle(props) {
            return <Logo width={50} height={50} color={(theme === 'dark') ? Colors[theme].text : Colors[theme].primary} />
          },
          headerTitleStyle: {
            color: Colors[theme].text
          },
          headerRight(props) {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Settings')} className="px-5">
                <Ionicons className="text-center" name="settings-outline" size={25} color={Colors[theme].textSecondary} />
            </TouchableOpacity>
            );
          },
        }}
      />
      <View className="w-full px-4 flex flex-col gap-2">
        <Text style={{
          fontFamily: 'VKSansMedium',
          color: Colors[theme].textSecondary,
          textAlign: 'center',
          marginBottom: 15,
          fontSize: 16
        }}>Войдите в свою учетную запись</Text>
        <TextInput
          placeholder="Введите ИИН"
          placeholderTextColor={Colors[theme].textTertiary} 
          style={[
            styles.input,
            {
              backgroundColor: Colors[theme].backgroundContent,
              color: Colors[theme].text
            },
          ]}
        />
        <TextInput placeholder="Введите пароль" placeholderTextColor={Colors[theme].textTertiary} secureTextEntry={true} style={[
            styles.input,
            {
              backgroundColor: Colors[theme].backgroundContent,
              color: Colors[theme].text
            },
          ]} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[
            styles.button,
            {
              backgroundColor: Colors[theme].primary,
            },
          ]}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: 'VKSansRegular',
              fontSize: 16
            }}
            onPress={() => console.log(isDark)}
          >
            Войти
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
