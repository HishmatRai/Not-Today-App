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
    fontSize: 16,
  },
  _title: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: hp("2%"),
  },
  _list_main: {
    backgroundColor: "#F9F6F6",
    padding: 20,
    marginTop: hp("2%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
  },
  _list__image_main: {
    width: "65%",
    // backgroundColor:"red"
  },
  _list__data_main: {
    width: "30%",
    // backgroundColor:"green"
  },
  _list_heading: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
  _unit: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 5,
  },
  _next_btn: {
    backgroundColor: "#1EA3C8",
    width: "100%",
    borderRadius: 5,
    height: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  _next_btn_text: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  _price_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1%"),
  },
});
