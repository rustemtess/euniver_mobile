import { Colors } from "@/constants/Colors";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import { setStatusBarBackgroundColor, setStatusBarStyle } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { Platform, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Определение интерфейса для контекста
interface ThemeProviderProps {
  isDark: boolean;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

// Создание контекста с начальным значением
export const ThemeContext = createContext<ThemeProviderProps>({
  isDark: false,
  theme: "light",
  setTheme: () => {}, // Заглушка для функции
});

// Провайдер контекста
const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Загружаем тему из AsyncStorage при монтировании компонента
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme === 'dark' ? 'dark' : 'light');
      }
    };

    loadTheme();
  }, []); // Этот эффект выполняется только один раз при монтировании

  useEffect(() => {
    if (theme) {
      setTimeout(() => {
        if(Platform.OS === 'android') {
          setBackgroundColorAsync(Colors[theme].background);
          setStatusBarBackgroundColor(Colors[theme].background);
        }
        setStatusBarStyle(theme === 'light' ? 'dark' : 'light');
      }, 100)
    }
  }, [theme]);

  const changeTheme = async (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    await AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark: theme === 'dark', theme, setTheme: changeTheme }}>
      <View
        style={{
          backgroundColor: Colors[theme].background,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
