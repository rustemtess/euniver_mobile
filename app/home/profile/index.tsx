import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/providers/ThemeProvider";
import { stylesProfile } from "@/styles/profile.style";
import { styles } from "@/styles/style";
import { Stack } from "expo-router";
import { useContext } from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import { Image, SafeAreaView, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function ProfileScreen() {

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
                  title: "Профиль",
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
              <View style={stylesProfile.header}>
                <Image source={require('@/assets/images/ava.jpg')} style={stylesProfile.headerImg} />
                <View style={stylesProfile.headerInfo}>
                    <Text numberOfLines={1} 
  ellipsizeMode="tail" className="text-center text-xl font-medium" style={{
    width: screenWidth * 0.9,
    color: Colors[theme].text,
    fontFamily: 'GoogleSansRegular'
  }}>Жумабек Рустем Русланулы</Text>
                    {/* <Text style={{
                        alignSelf: 'flex-start'
                    }} className="bg-orange-500 text-white p-0.5 px-1 rounded-lg text-sm">Студент</Text> */}
                    {/* <Text className="text-white text-sm bg-red-500 p-0.5 px-1.5 rounded-lg" style={{
                        alignSelf: 'center'
                    }}>Легенда</Text> */}
                    <Text className="text-center" style={{
                      color: Colors[theme].textSecondary,
                      fontFamily: 'VKSansRegular'
                    }}>@rustemdev</Text>
                </View>
              </View>
              <View style={stylesProfile.mainInfo}>
                <Text style={{
                    color: Colors[theme].textSecondary,
                    textAlign: 'center',
                    width: '100%'
                  }}>Моя информация</Text>
                <View style={stylesProfile.mainInfoBlock}>
                  <View className="flex">
                    <Text style={{
                        color: Colors[theme].textSecondary,
                        fontSize: 14,
                        fontFamily: 'GoogleSansRegular'
                      }}>Имя пользователя</Text>
                      {/* <Text className="text-white text-sm bg-red-500 p-0.5 px-1.5 rounded-lg" style={{
                        alignSelf: 'center'
                    }}>Легенда</Text> */}
                      <Text style={{
                        color: Colors[theme].text,
                        fontSize: 17,
                        fontFamily: 'VKSansRegular'
                      }}>rustemdev</Text>
                  </View>
                  <TouchableOpacity style={{
                    backgroundColor: Colors[theme].switchBackground,
                    padding: 12,
                    borderRadius: 10
                  }}>
                    <Feather name="edit-2" size={18} color={Colors[theme].switchButton} />
                  </TouchableOpacity>
                  </View>
              </View>
        </SafeAreaView>
    );
}