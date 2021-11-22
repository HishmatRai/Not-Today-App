import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"; 
export default StyleSheet.create({
    root: {flex: 1, padding: 0},
    title: {textAlign: 'center', fontSize: wp("7%")},
    codeFieldRoot: {marginTop: 0},
    cell: {
      width: wp("20%"),
      height: hp("6%"),
      lineHeight: 38,
      fontSize: wp("7%"),
      borderBottomWidth: 2,
      borderBottomColor: '#707070',
      textAlign: 'center',
      color:"#000",
      fontFamily: "Roboto-Regular",
    },
    focusCell: {
      borderColor: '#000',
      fontFamily: "Roboto-Regular",
    },
  });