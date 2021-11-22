import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  _logo_main: {
    height: hp("20%"),
    marginTop: hp("10%"),
  },
  _image: {
    flex: 1,
    resizeMode: "cover",
    // height: hp("100%"),
    // width: wp("100%"),
  },
  _heading_main: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp("5%"),
  },
  _heading: {
    color: "#000000",
    fontFamily: "Roboto-Regular",
    fontSize: wp("7%"),
  },
  _app_name: {
    color: "#5EBDD7",
    fontFamily: "Roboto-Bold",
    fontSize: wp("7%"),
  },
  _line_main: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("90%"),
    alignSelf: "center",
    marginTop: hp("5%"),
  },
  _line: {
    flex: 1,
    height: 1,
    backgroundColor: "#707070",
  },
  _line_text: {
    width: wp("30%"),
    textAlign: "center",
    color: "#000000",
    fontFamily: "Roboto-Regular",
    fontSize: wp("4%"),
  },
  _num_login_main: {
    width: wp("100%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: hp("15%"),
  },
  _mob_num_code: {
    fontFamily: "Roboto-Regular",
    color: "#000000",
    marginHorizontal: 5,
    fontSize: wp("5%"),
  },
  _mob_num_heading: {
    fontFamily: "Roboto-Regular",
    color: "#8B8B8B",
    marginHorizontal: 5,
    fontSize: wp("5%"),
  },
  _social_login_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: hp("5%"),
  },
  _social_login_btn: {
    width: wp("40%"),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  _social_login_btn_text: {
    fontFamily: "Roboto-Regular",
    color: "#000000",
    fontSize: wp("5%"),
    marginLeft: 5,
  },
});
