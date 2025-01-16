import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useContext, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationsList } from "@/app/NavigationsList";
import { useNavigation } from "@react-navigation/native";

import { Entypo, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/providers/ThemeProvider";

type CameraTypeProps = NativeStackScreenProps<NavigationsList, "QRScanner">;

const Camera = () => {
  const { theme } = useContext(ThemeContext);
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const navigation = useNavigation<CameraTypeProps["navigation"]>();
  const [isFlash, setIsFlash] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);

  useEffect(() => {
    const checkPermissions = async () => {
      if (!permission) {
        const { status } = await requestPermission();
        if (status !== "granted") {
          Alert.alert(
            "Необходим доступ к камере",
            "Для сканирования QR-кодов требуется доступ к камере.",
            [
              { text: "Настройки", onPress: () => Linking.openSettings() },
              { text: "Отмена", onPress: () => navigation.goBack() },
            ],
          );
        }
      }
    };

    checkPermissions();
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: "black",
          },
        ]}
      ></View>
    );
  }

  const handleQRCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    Alert.alert("QR Code Scanned!", `Data: ${data}`);
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={scanned ? undefined : handleQRCodeScanned}
        enableTorch={isFlash}
      >
        <View style={styles.topOverlay} />
        <View style={styles.middleRow}>
          <View style={styles.sideOverlay} />
          <View style={styles.transparentSquare}>
            <Text style={styles.title}>Сканируйте QR-код</Text>
            <View
              style={[
                styles.transparentSquareBlock,
                {
                  borderTopWidth: 4,
                  borderLeftWidth: 4,
                },
              ]}
            />
            <View
              style={[
                styles.transparentSquareBlock,
                {
                  borderRightWidth: 4,
                  borderTopWidth: 4,
                  right: 0,
                  top: 0,
                },
              ]}
            />
            <View
              style={[
                styles.transparentSquareBlock,
                {
                  borderLeftWidth: 4,
                  borderBottomWidth: 4,
                  bottom: 0,
                  left: 0,
                },
              ]}
            />
            <View
              style={[
                styles.transparentSquareBlock,
                {
                  borderRightWidth: 4,
                  borderBottomWidth: 4,
                  bottom: 0,
                  right: 0,
                },
              ]}
            />
          </View>
          <View style={styles.sideOverlay} />
        </View>
        <View style={styles.bottomOverlay} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsFlash((prev) => !prev)}
          >
            <Entypo name="flash" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              setFacing((prev) => (prev === "front" ? "back" : "front"))
            }
          >
            <Ionicons name="camera-reverse-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  title: {
    position: "fixed",
    top: "-30%",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
    zIndex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: "10%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "100%",
    zIndex: 1,
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: 15,
    borderRadius: 15,
    width: 54,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  topOverlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  middleRow: {
    flexDirection: "row",
  },
  sideOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  transparentSquare: {
    width: "100%",
    maxWidth: 260,
    height: 260,
    backgroundColor: "transparent",
    borderRadius: 20,
    borderColor: "white",
    position: "relative",
  },
  transparentSquareBlock: {
    width: 50,
    height: 50,
    borderColor: "#3057d3",
    position: "absolute",
  },
  bottomOverlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
