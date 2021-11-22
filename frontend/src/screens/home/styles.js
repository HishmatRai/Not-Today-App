import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  _header_main: {
    height: hp("23%"),
  },
  header_bg_image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
  },
  _profile_img: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
  _header_head_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  _header_profile_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _header_location_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _header_notification_icon_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _user_message: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: wp("4%"),
  },
  _address: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: wp("3%"),
  },
  _notification_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _setting_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 3,
  },
  _input_main: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    height: hp("6%"),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  _input: {
    color: "#575656",
    fontFamily: "Roboto-Regular",
    fontSize: wp("4.5%"),
    width: "85%",
  },
  _data_main: {
    flex: 1,
    backgroundColor: "white",
  },
  _slider_main: {
    marginTop: 10,
  },
  _slider: {
    width: hp("27%"),
    marginLeft: 20,
  },
  _slider_img: {
    borderRadius: 20,
  },
});
