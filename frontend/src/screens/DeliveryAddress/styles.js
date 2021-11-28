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
  _map_main: {
    height: hp("25%"),
    marginTop: hp("2%"),
    marginHorizontal: 20,
  },
  _title: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    marginHorizontal: 25,
    marginTop: hp("3%"),
  },
  _title_address: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 15,
  },
  _name: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 12,
  },
  _name_main: {
    marginHorizontal: 20,
    backgroundColor: "#F1EFEF",
    height: 36,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: hp("2%"),
  },
  _saved_address: {
    marginTop: hp("2%"),
    color: "#1EA3C8",
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontSize: 15,
  },
  _address_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("2%"),
    marginHorizontal: 25,
  },
  _address_map: {
    marginTop: hp("2%"),
    color: "#6D6D6D",
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    marginHorizontal: 20,
  },
  _save_address_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _save_address_check: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderColor: "#707070",
    alignItems:"center",
    justifyContent:"center",
    marginRight:10
  },
});
