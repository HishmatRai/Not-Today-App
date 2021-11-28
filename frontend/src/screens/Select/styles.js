import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  _logo_main: {
    height: hp("20%"),
    marginTop: hp("10%"),
    marginBottom: hp("5%"),
  },
  _image: {
    flex: 1,
    resizeMode: "cover",
  },
  _main: {
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
  button: {
    height: hp("8%"),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: wp("70%"),
    alignSelf: "center",
    backgroundColor: "#18A6CC",
    marginTop: hp("5%"),
  },
  btn_text: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Roboto-Bold",
  },
});
