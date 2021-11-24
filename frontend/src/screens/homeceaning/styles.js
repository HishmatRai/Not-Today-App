import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  _header_main: {
    backgroundColor: "#1EA3C8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: hp("1.5%"),
  },
  _header_back_icon_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _back_btn: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _header_heading: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: wp("4%"),
  },
  _title: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: wp("4%"),
    marginHorizontal: 20,
    marginTop:hp("2%")
  },
});
