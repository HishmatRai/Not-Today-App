import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  _title: {
    color: "#9FA2B1",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _name: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  _data_main: {
    marginBottom: hp("3%"),
  },
  _data_main2: {
    marginTop: hp("3%"),
  },
  _line: {
    backgroundColor: "#707070",
    height: 1,
  },
  _line2: {
    backgroundColor: "#707070",
    height: 1,
    marginTop: hp("3%"),
  },
  _toggle_heading: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  _toggle_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("3%"),
  },
});
