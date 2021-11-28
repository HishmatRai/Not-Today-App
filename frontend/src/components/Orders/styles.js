import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  _profile_img: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp("3%"),
  },
  _card_data_main: {
    width: "50%",
  },
  _img_main: {
    width: "25%",
  },
  _price_main: {
    width: "25%",
    alignItems: "flex-end",
  },
  _heading: {
    color: "#787878",
    fontFamily: "Roboto-Bold",
    fontSize: 12,
  },
  _quantity_title: {
    color: "#B6B6B6",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    marginVertical:3
  },
  _date: {
    color: "#A29F9F",
    fontFamily: "Roboto-Regular",
    fontSize: 8,
  },
  _price: {
    color: "#1EA3C8",
    fontFamily: "Roboto-Bold",
    fontSize: 12,
  },
});
