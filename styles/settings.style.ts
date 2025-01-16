import { StyleSheet } from "react-native";

export const stylesSettings = StyleSheet.create({
  button: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  buttonContent: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonIcon: {
    marginRight: 5, // Увеличить расстояние до текста, если нужно
  },
  buttonText: {
    textAlign: "left",
    marginLeft: 5,
    fontSize: 17,
  },
});
