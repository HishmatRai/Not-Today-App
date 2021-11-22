import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  button: {
    height: hp("8%"),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width:wp("90%"),
    alignSelf:"center"
  },
  btn_text: {
    color: "#fff",
    fontSize: hp("3%"),
    fontFamily: "Roboto-Regular",
  },
});
