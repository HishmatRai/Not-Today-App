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
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
  _profile_img: {
    width: 121,
    height: 121,
    borderRadius: 121 / 2,
  },
  _profile_img_main: {
    alignItems: "center",
    marginTop: hp("5%"),
  },
  _camera_btn: {
    marginTop: -23,
    alignSelf: "center",
    marginLeft: 80,
  },
  _name: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: hp("2%"),
  },
  _email: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    textAlign: "center",
  },
  _tabs_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: hp("5%"),
  },
  _tabs: {
    width: "50%",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#D3DFEF",
  },
  _tabs_title: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    textAlign: "center",
  },
  _active_tabs: {
    width: "50%",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#1EA3C8",
  },
  _tabs_data: {
    marginTop: hp("5%"),
    marginHorizontal: 20,
  },
  _order_profile_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("3%"),
    marginHorizontal: 20,
  },
  _order_profile_img: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight:20
  },
  _order_name: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    textAlign: "center",
  },
});
