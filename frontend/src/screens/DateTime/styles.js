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
  _header_title_main: {
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
    fontSize: 16,
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
    fontSize: 16,
  },
  _save_address_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _heading: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: hp("3%"),
  },
  _title: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: hp("3%"),
  },
  _calender_main: {
    marginTop: hp("2%"),
    backgroundColor: "#F1EFEF",
  },
  _time_main: {
    backgroundColor: "#F1EFEF",
    padding: 20,
    marginTop: hp("2%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  _active_selected_time: {
    backgroundColor: "#4D4D4D",
    borderRadius: 5,
    width: "22%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  __selected_time:{
    backgroundColor: "#1EA3C8",
    borderRadius: 5,
    width: "22%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  _active_selected_time_text: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
});
