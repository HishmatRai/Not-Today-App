import { StyleSheet,Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
    container: {
        // flex:1,
        // backgroundColor: '#fff',
        // width:"50%"
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      _map_show: {
        width: "100%",
        height: "100%",
        
    
    },
})