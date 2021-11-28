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
    paddingHorizontal:20
  },
  _heading: {
    color: "#575656",
    fontFamily: "Roboto-Regular",
    fontSize: wp("5%"),
    marginTop:hp("5%")
  },
  _header_main:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:hp("2%")
  },
  _header_heading:{
    fontFamily: "Roboto-Bold",
    color: "#000000",
    fontSize: wp("5%"),
    marginLeft: 5,
  },
  _code_picker:{
    width:wp("35%"),
    height:hp("5%"),
    alignItems:"flex-start",
    marginTop:hp("1%")
    
  },
  _country_code_main:{
    width:wp("90%"),
    height:hp("7%"),
    justifyContent:"center",
    marginTop:hp("5%"),
    borderBottomWidth:1,
    borderBottomColor:"#707070",
    flexDirection:"row",
    alignItems:"center"
  },
  _input:{
    width:wp("55%"),
    fontFamily: "Roboto-Regular",
    fontSize: wp("6%"),
    padding:0,
    margin:0
  },
  _message:{
    fontFamily: "Roboto-Regular",
    fontSize: wp("4%"),
    color:"#575656",
    textAlign:"center",
    marginTop:hp("3%")
  }
});
