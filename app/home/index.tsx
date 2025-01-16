import { Dimensions, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationState } from "@react-navigation/native";
import { NavigationsList } from "../NavigationsList";
import { styles } from "@/styles/style";
import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext, useEffect } from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Lesson from "@/components/ui/lesson";
import TabBar from "@/components/TabBar";
import {
  ContributionGraph,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

type HomeScreenProps = NativeStackScreenProps<NavigationsList, "Home">;

const commitsData = [
  { date: "2025-01-01", count: 4 },
  { date: "2025-02-15", count: 10 },
  { date: "2025-03-30", count: 2 },
];

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { theme } = useContext(ThemeContext);

  const filteredData = commitsData.filter((item) => {
    const date = new Date(item.date);
    // Убедимся, что дата лежит в диапазоне с 1 декабря по 28 февраля (включая 28 февраля)
    return date >= new Date("2025-01-01") && date <= new Date("2025-03-30");
  });
  
  // Количество дней с 1 декабря 2024 по 28 февраля 2025 года
  const startDate = new Date("2025-01-01");
  const endDate = new Date("2025-03-30");
  
  // Рассчитываем количество дней между датами
  const numDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: Colors[theme].primary,
    backgroundGradientTo: Colors[theme].primary,
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }

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
          title: "👋 Привет, Рустем ".substring(0, 22) + '...!',
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: Colors[theme].text,
            fontFamily: "GoogleSansMedium",
            fontSize: 17
          },
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerRight(props) {
            return (
              <View style={styles.headerView}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Text
                    style={{
                      backgroundColor: Colors[theme].primary,
                      color: "white",
                      fontFamily: 'VKSansMedium',                      
                      paddingVertical: 11, // Добавляем вертикальные отступы
                      paddingHorizontal: 10, // Добавляем горизонтальные отступы для увеличения размера кнопки
                      paddingBottom: 13,
                      borderRadius: 10,
                      textAlign: 'center', // Центрируем текст внутри                     
                    }}
                  >
                  ЖР
                  </Text>
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <View className="pt-4">
        {/* <Text className="px-2 pb-3" style={{
          ...(Platform.OS === 'ios' && {
            paddingTop: 6
          }),
          color: Colors[theme].textSecondary,
          fontFamily: 'VKSansMedium',
          textAlign: 'center'
        }}>Статистика посещаемости</Text> */}
        <ContributionGraph
          tooltipDataAttrs={() => ({})}
          values={filteredData}
          endDate={new Date('2025-03-30')}
          numDays={numDays}
          width={screenWidth - 20}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
      <View className="flex-1 flex-col mt-2 gap-4 w-full p-2 pb-0" style={{
        backgroundColor: Colors[theme].backgroundContent
      }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="flex flex-row gap-5 w-full border-b h-[58px]" style={{
        borderColor: Colors[theme].switchBackground
      }}>
        <TouchableOpacity className="p-3" style={{
          borderBottomWidth: 1,
          borderBottomColor: Colors[theme].text
        }}>
          <Text style={{
            fontFamily: 'GoogleSansMedium',
            fontSize: 16,
            color: Colors[theme].text
          }}>Понидельник</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3">
          <Text style={{
            fontFamily: 'GoogleSansRegular',
            fontSize: 16,
            color: Colors[theme].textSecondary
          }}>Вторник</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3">
          <Text style={{
            fontFamily: 'GoogleSansRegular',
            fontSize: 16,
            color: Colors[theme].textSecondary
          }}>Среда</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3">
          <Text style={{
            fontFamily: 'GoogleSansRegular',
            fontSize: 16,
            color: Colors[theme].textSecondary
          }}>Четверг</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3">
          <Text style={{
            fontFamily: 'GoogleSansRegular',
            fontSize: 16,
            color: Colors[theme].textSecondary
          }}>Пятница</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3">
          <Text style={{
            fontFamily: 'GoogleSansRegular',
            fontSize: 16,
            color: Colors[theme].textSecondary
          }}>Суббота</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView
        contentContainerStyle={{
          rowGap: 6,
          paddingBottom: 20
        }}
      >
        <Lesson type="Лекция" title="Мәліметтер қорын басқару жүйесі" startTime="11:55" endTime="12:45" campus={1} audience="252" />
        <Lesson type="Практика" title="Мәліметтер қорын басқару жүйесі" startTime="11:55" endTime="12:45" campus={1} audience="252" />
        <Lesson type="Лекция" title="Мәліметтер қорын басқару жүйесі" startTime="11:55" endTime="12:45" campus={1} audience="252" />
        <Lesson type="Практика" title="Мәліметтер қорын басқару жүйесі" startTime="11:55" endTime="12:45" campus={1} audience="252" />
        


      </ScrollView>
      </View>
      <TabBar />
    </SafeAreaView>
  );
}
