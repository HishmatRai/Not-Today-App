import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    height: 82,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _tab: {
    width: "25%",
    alignItems: "center",
  },
  _tab_title: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    textAlign: "center",
    marginTop: 3,
  },
});
