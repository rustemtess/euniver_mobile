import { Colors } from "@/constants/Colors";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationsList } from "@/app/NavigationsList";
import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useNavigation } from "@react-navigation/native";
import { Circle } from "react-native-svg";

type TabBarProps = NativeStackScreenProps<NavigationsList, 'Home'>;

const TabBar = () => {

    const navigation = useNavigation<TabBarProps['navigation']>();
    const { theme } = useContext(ThemeContext);

    return (
        <View className="w-full p-1 pb-2 pt-3 flex flex-row justify-around items-center border-t" style={{
            borderColor: Colors[theme].switchBackground
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')} className="relative w-[70px] flex flex-col gap-[0.3em] rounded-xl">
                <Text className="absolute right-1 top-[-0.5em] bg-red-500 text-white p-0.5 px-1.5 rounded-xl text-xs">
                    12
                </Text>
                <Ionicons className="text-center" name="notifications-outline" size={25} color={Colors[theme].textSecondary} />
                    <Text className="w-full text-center font-sm" style={{
                        fontSize: 10,
                        color: Colors[theme].textSecondary,
                        fontFamily: 'GoogleSansRegular'
                    }}>Уведомления</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Services')} className="w-[70px] flex flex-col gap-[0.3em] rounded-xl">
                <Feather className="text-center" name="grid" size={25} color={Colors[theme].textSecondary} />
                    <Text className="w-full text-center font-sm" style={{
                        fontSize: 10,
                        color: Colors[theme].textSecondary,
                        fontFamily: 'GoogleSansRegular'
                    }}>Сервисы</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QRScanner')} className="w-[70px] flex flex-col gap-[0.3em] rounded-xl">
                <MaterialCommunityIcons className="text-center" name="qrcode-scan" size={25} color={Colors[theme].textSecondary} />
                <Text className="w-full text-center font-sm" style={{
                    fontSize: 10,
                    color: Colors[theme].textSecondary,
                    fontFamily: 'GoogleSansRegular'
                }}>eUniver QR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Settings')} className="w-[70px] flex flex-col gap-[0.3em] rounded-xl">
                <Ionicons className="text-center" name="settings-outline" size={25} color={Colors[theme].textSecondary} />
                <Text className="w-full text-center font-sm" style={{
                    fontSize: 10,
                    color: Colors[theme].textSecondary,
                    fontFamily: 'GoogleSansRegular'
                }}>Настройки</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TabBar;