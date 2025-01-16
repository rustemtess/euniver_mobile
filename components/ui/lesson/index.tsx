import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";
import { Text, View } from "react-native";

interface LessonProps {
    type: 'Практика' | 'Лекция';
    title: string;
    startTime: string;
    endTime: string;
    campus: number;
    audience: string;
}

const Lesson = ({ type, title, startTime, endTime, campus, audience }: LessonProps) => {

    const { theme } = useContext(ThemeContext);

    return (
        <View className="rounded-md p-3 flex flex-col gap-[0.3em]" style={{
            backgroundColor: Colors[theme].background
        }}>
          <Text
            className={`${type === 'Лекция' ? 'text-orange-600' : 'text-green-600'}`}
            style={{
              fontFamily: "VKSansMedium",
            }}
          >
            { type }
          </Text>
          <Text
            style={{
              fontFamily: "GoogleSansMedium",
              fontSize: 15,
              color: Colors[theme].text
            }}
          >
            { title }
          </Text>
          <Text
            style={{
              fontFamily: "GoogleSansRegular",
              fontSize: 13,
              color: Colors[theme].textSecondary,
            }}
          >
            Начало в {startTime} до {endTime}, {campus} корпус, {audience} ауд
          </Text>
        </View>
    );
};

export default Lesson;