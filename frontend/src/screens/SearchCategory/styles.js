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
  _location_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: hp("5%"),
  },
  _location_show_main: {
    flexDirection: "row",
    width: "75%",
  },
  _location: {
    color: "#4D4D4D",
    fontFamily: "Roboto-Bold",
    fontSize: 15,
    marginLeft: 5,
  },
  _change_btn_text: {
    color: "#1EA3C8",
    fontFamily: "Roboto-Bold",
    fontSize: 15,
  },
  _input_main: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    height: hp("5%"),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#24A19C",
    marginTop: hp("3%"),
  },
  _input: {
    color: "#4D4D4D",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    width: "85%",
  },
  _popular_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: hp("3%"),
  },
  _popular: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
  _near_by_you: {
    color: "#757575",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#D1D1D1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: hp("3%"),
  },
  _card_main2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: hp("3%"),
  },
  _profile_img: {
    width: 72,
    height: 71,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#707070",
  },
  _profile_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _user_location_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _user_data_main: {
    marginLeft: "10%",
  },
  _user_name: {
    color: "#4D4D4D",
    fontFamily: "Roboto-Bold",
    fontSize: 15,
    marginBottom:10
  },
  _user_location: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    marginLeft: 5,
  },
  _distance_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:10
  },
  _distance: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    marginRight: 5,
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
});