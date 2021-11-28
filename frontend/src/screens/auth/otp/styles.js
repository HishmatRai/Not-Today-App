import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  _image: {
    flex: 1,
    resizeMode: "cover",
    height: hp("100%"),
    width: wp("100%"),
    paddingHorizontal: 20,
  },
  _heading: {
    color: "#575656",
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    marginTop: hp("5%"),
  },
  _change_mon_num: {
    color: "#CC1818",
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    marginTop: hp("1%"),
  },
  _mob_number: {
    color: "#575656",
    fontFamily: "Roboto-Regular",
    fontSize: 18,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
  },
  _header_heading: {
    fontFamily: "Roboto-Bold",
    color: "#000000",
    fontSize: 16,
    marginLeft: 5,
  },
  _confirmation_code: {
    //   backgroundColor:"red",
    marginTop: hp("10%"),
    height: hp("5%"),
  },
  _privacy_main: {
    marginTop: hp("30%"),
  },
  _message:{
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign:"center"
  },
  _privacy_btn_text:{
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    textAlign:"center"
  }
});
