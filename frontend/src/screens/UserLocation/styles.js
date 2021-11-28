import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    fontSize: 15,
  },
  _data_main: {
    flex: 1,
    backgroundColor: "#1EA3C8",
    padding: 20,
  },
  _user_data_main: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("3%"),
  },
  _services_data_main: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("3%"),
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
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 14,
  },
  _services_heading: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 14,
  },
  _rating: {
    color: "#fff",
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
    backgroundColor: "#353A50",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  _message_btn: {
    height: 40,
    width: 40,
    backgroundColor: "#353A50",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  _id_main: {
    borderRadius: 5,
    padding: 5,
  },
  _id: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
  _map: {
    height: hp("50%"),
  },
  _timing: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize: 15,
  },
});
