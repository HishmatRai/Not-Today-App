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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: hp("1.5%"),
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
  _title: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: hp("2%"),
  },
  _list_main: {
    backgroundColor: "#F9F6F6",
    paddingHorizontal: 20,
    marginTop: hp("2%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingVertical: 10,
    elevation: 5,
  },

  _list_heading: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
  _list_point: {
    color: "#5E5E5E",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    marginLeft: 10,
    // marginTop:10
  },
  _list_point_main: {
    flexDirection: "row",
    padding: 0,
    margin: 0,
    marginTop: hp("2%"),
    paddingHorizontal: 20,
  },
  _dot: {
    backgroundColor: "#5E5E5E",
    width: 6,
    height: 6,
    borderRadius: 6 / 2,
    marginTop: 4,
  },
  _next_btn_main: {
    marginTop: hp("7%"),
    paddingHorizontal: 20,
  },
  _next_btn: {
    backgroundColor: "#1EA3C8",
    width: "100%",
    borderRadius: 5,
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  _next_btn_text: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontSize:16,
  },
  _price_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _unit: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 5,
  },
  _select_items_main: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("3%"),
  },
  _counter_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _increment_btn: {
    backgroundColor: "#1EA3C8",
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    height: hp("3.5%"),
  },
  _counter_show: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#000",
    fontSize: 16,
  },
  _counter_show_main: {
    width: 30,
    borderWidth: 1,
    borderColor: "#1EA3C8",
    height: hp("3.5%"),
    alignItems: "center",
    justifyContent: "center",
  },
  _card_min: {
    // backgroundColor: "red",
    width: "29%",
    marginTop: 20,
    alignItems: "center",
  },
  _card_image: {
    width: "100%",
    height: 56,
  },
  _card_headign: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#000",
    fontSize: 16,
    marginVertical: hp("2%"),
  },
  _note: {
    fontFamily: "Roboto-Regular",
    color: "#000",
    fontSize: 16,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
