import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenLayout: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 15,
    width: "100%",
    borderRadius: 10,
  },
  input: {
    padding: 15,
    width: "100%",
    borderRadius: 10,
    fontFamily: 'VKSansRegular',
    fontWeight: 500,
    fontSize: 16
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
