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
    fontSize: 12,
  },
  _address: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
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
    fontSize: 14,
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
    height: 107,
  },
  _slider_img: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
  _discount_main: {
    backgroundColor: "#1EA3C8",
    position: "absolute",
    alignSelf: "flex-end",
    width: "50%",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 5,
    alignItems: "center",
  },
  _presentage: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    textAlign: "center",
  },
  _discount: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    textAlign: "center",
  },
  _discount_title: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 7,
    textAlign: "center",
  },
  _category_main: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: hp("3%"),
  },
  _category: {
    width: "25%",
    alignItems: "center",
    marginTop: hp("3%"),
  },
  _category_icon_main: {
    backgroundColor: "#ADDEEB",
    height: 43,
    width: 43,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  _category_title: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    textAlign: "center",
    marginTop: hp("1%"),
  },
  _recemmended_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: hp("2%"),
  },
  _recemmended: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    textAlign: "center",
  },
  _see_all_btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  _see_all_btn_text: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize:14,
    textAlign: "center",
  },
  _rec_slider_main: {
    marginTop: hp("4%"),
    marginBottom: hp("3%"),
  },
  _res_slider: {
    width: hp("27%"),
    marginLeft: 20,
  },
  _res_slider_img: {
    borderRadius: 15,
    width: "100%",
    height: 97,
  },
  _rec_slider_title: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    marginTop: hp("1%"),
  },
  _rating_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  _rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  _rating_show: {
    color: "#656565",
    fontFamily: "Roboto-Regular",
    fontSize:13,
    marginLeft: 10,
  },
  _start_heading: {
    color: "#656565",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
  },
  _price_show: {
    color: "#656565",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    marginLeft: 5,
  },
});
