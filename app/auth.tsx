import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { router } from "expo-router";
import { globalStyle } from "@/styles/global";
import { Colors } from "@/constants/Colors";

export default function AuthScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <SafeAreaView style={[globalStyle.container, styles.safeAreaView]}>
        <View style={styles.mainContent}>
          <View style={styles.block}>
            <Image
              source={require("@/assets/images/eUniver.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text style={styles.title}>Авторизация</Text>
            <Text style={styles.description}>Заполните поля для входа</Text>
          </View>

          <View style={styles.block}>
            <TextInput
              style={styles.input}
              placeholder="Введите ИИН"
              placeholderTextColor={Colors["light"].inputPlaceholderColor}
            />
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Введите пароль"
              placeholderTextColor={Colors["light"].inputPlaceholderColor}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Keyboard.dismiss();
                router.replace("/home");
              }}
            >
              <Text style={styles.buttonText}>Войти в аккаунт</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    gap: 25,
    width: "100%",
  },
  safeAreaView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 25,
    gap: 25,
    width: "100%",
  },
  block: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 6,
  },
  title: {
    fontFamily: "VKSansMedium",
    fontSize: 24,
    color: "#333",
  },
  description: {
    fontFamily: "VKSansRegular",
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontFamily: "VKSansRegular",
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#4A86CC",
    borderRadius: 8,
    width: "100%",
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontFamily: "VKSansMedium",
    fontSize: 16,
    color: "white",
    lineHeight: 24,
  },
});
