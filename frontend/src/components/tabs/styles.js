import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    height: 82,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    // paddingHorizontal:20
  },
  _tab:{
    //   backgroundColor:"red",
      width:"25%",
      alignItems:"center"
  },
  _tab_title:{
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: wp("4%"),
    textAlign: "center",
  }
});
