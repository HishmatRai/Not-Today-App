import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  _next_btn: {
    backgroundColor: "#005F78",
    width: "100%",
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: hp("3%"),
  },
  _next_btn_text: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  _data_main: {
    backgroundColor: "#1EA3C8",
    flex: 1,
    borderRadius: 10,
    marginTop: hp("10%"),
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  _main_icon: {
    width: 96,
    height: 96,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 96 / 2,
    alignSelf: "center",
    backgroundColor: "#3F4E87",
    marginTop: -43,
    alignItems: "center",
    justifyContent: "center",
  },
  _heading: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 23,
    textAlign: "center",
    marginTop: hp("3%"),
  },
  _heading2: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    textAlign: "center",
    marginTop: hp("2%"),
  },
  _name: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: hp("3%"),
  },
  _id: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    textAlign: "center",
  },
  _profile_img_main: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: hp("3%"),
    marginBottom: hp("5%"),
  },
  _profile_img: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  _rating_show: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _rating_show_main: {
    position: "absolute",
    alignSelf: "flex-end",
    backgroundColor: "#3ACCE1",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    top: 55,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  _rating_main:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  _rating_category:{
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  }
});
