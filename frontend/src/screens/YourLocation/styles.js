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
    paddingHorizontal: 20,
    paddingVertical: hp("1.5%"),
  },
  _header_title_main:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    fontSize:16,
  },
  _next_btn: {
    backgroundColor: "#1EA3C8",
    width: "100%",
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  _next_btn_text: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 18,
  },
  _input_main: {
    flexDirection: "row",
    backgroundColor: "white",
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  _input: {
    color: "#193628",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    width: "90%",
  },
});
