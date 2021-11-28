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
  _heading: {
    color: "#000000",
    fontFamily: "Roboto-Regular",
    fontSize: 25,
    marginTop: hp("3%"),
    textAlign: "center",
  },
  _logo_main: {
    // backgroundColor:"red",
    height: hp("45%"),
    width: "100%",
  },
  _card_img: {
    height: "100%",
    width: "100%",
  },
  _message:{
    color: "#706F6F",
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    marginTop: hp("3%"),
    textAlign: "center",
  },
  button: {
    height: hp("8%"),
    borderRadius: 10,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    width:wp("90%"),
    alignSelf:"center",
    backgroundColor:"#18A6CC",
    marginTop:hp("5%")
  },
  btn_text: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Roboto-Regular",
    marginLeft:10
  },
  _skip_btn_text:{
    color: "#000",
    fontSize: 24,
    fontFamily: "Roboto-Regular",
    marginLeft:10,
    marginTop:hp("3%"),
    marginBottom:20,
    textAlign:"center"
  }
});
