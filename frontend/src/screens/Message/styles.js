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
    fontFamily: "Roboto-Regular",
    fontSize: 15,
  },
  _data_main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  _heading: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 40,
    textAlign: "center",
    marginHorizontal: 20,
  },
  _message: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop:hp("2%")
  },
  _request_id: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 22,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop:hp("5%")
  },
  _category_selected: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    marginHorizontal: 20,
    marginTop:hp("3%")
  },
  _user_data_main: {
    backgroundColor: "#D1D1D1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:hp("3%")
  },
  _services_data_main: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "white",
    marginTop:hp("3%")
  },
  _profile_img: {
    width: 48,
    height: 48,
    borderRadius: 5,
  },
  _user_data: {
    flexDirection: "row",
    alignItems: "center",
  },
  _user_name: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 14,
  },
  _services_heading: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 14,
  },
  _rating: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
  _service_provide: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
  _name_rating_main: {
    marginLeft: 10,
  },
  _call_btn_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _call_btn: {
    height: 40,
    width: 40,
    backgroundColor: "#1EA3C8",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  _message_btn: {
    height: 40,
    width: 40,
    backgroundColor: "#1EA3C8",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  _id_main: {
    borderWidth: 1,
    borderColor: "#78849E",
    borderRadius: 5,
    padding: 5,
  },
  _id: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
  _track: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    marginHorizontal: 20,
    marginTop:hp("3%")
  },
  _location_main: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop:hp("1%")
  },
  _location: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft:10
  },
});
