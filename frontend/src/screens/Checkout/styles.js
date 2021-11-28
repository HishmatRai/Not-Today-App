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
    fontFamily: "Roboto-Regular",
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
  _shopping_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _add_to_card_show_main: {
    position: "absolute",
    top: 0,
    alignSelf: "flex-end",
    width: "91%",
    // backgroundColor:"red",
    alignItems: "flex-end",
    marginTop: -7,
  },
  _add_to_card_show: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
  _card_main: {
    backgroundColor: "#F1EFEF",
    padding: 20,
    marginBottom: 15,
  },
  _card_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_header_title: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    marginLeft: 5,
  },
  _schedule_date_time_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp("3%"),
    paddingRight: "10%",
  },
  _date_show_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 44,
    borderRadius: 5,
    width: 120,
    marginTop: hp("1%"),
  },
  _schedule_date_title: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    marginLeft: 10,
  },
  _date_show: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 23,
  },
  _day: {
    color: "#5E5E5E",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _day_main: {
    marginLeft: 10,
  },
  _order_data_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("2%"),
  },
  _order_address_main: {
    width: "70%",
    paddingLeft: "2%",
  },
  _order_mobile_main: {
    width: "30%",
    alignItems: "flex-end",
  },
  _name: {
    color: "#656565",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _selected_item_main: {
    marginTop: hp("2%"),
  },
  _selected_item_heading: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _selected_item_size_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _selected_item_size_title: {
    color: "#656565",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _selected_item_size_price: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _line: {
    backgroundColor: "#CBCBCB",
    height: 1,
    flex: 1,
    marginVertical: hp("2%"),
  },
  _discount: {
    color: "#717171",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _total_amount: {
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontSize: 12,
  },
  _about_product_main: {
    marginHorizontal: 20,
    marginBottom: hp("2%"),
  },
  _about_product_title: {
    color: "#717171",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _info_heading: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    marginTop: 3,
  },
  _input_main: {
    flexDirection: "row",
    backgroundColor: "white",
    height: hp("6%"),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: hp("2%"),
  },
  _input: {
    color: "#717171",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    width: "100%",
  },
  _Agrement:{
    color: "#717171",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  }
});
