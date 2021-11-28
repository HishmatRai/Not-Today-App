import React from "react";
import styles from "./styles";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Logo from "./../../../../assets/imagse/Logo.svg";
import Flag from "./../../../../assets/imagse/Flag.svg";
import Facebook from "./../../../../assets/imagse/facebook.svg";
import Google from "./../../../../assets/imagse/google.svg";
function Signup(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor="#5EBDD7"
        translucent={false}
      />
      <ImageBackground
        source={require("./../../../../assets/imagse/bgImage.png")}
        style={styles._image}
      >
        <View style={styles._logo_main}>
          <Logo width={"100%"} height={"100%"} fill={"#000"} />
        </View>
        <View style={styles._heading_main}>
          <Text style={styles._heading}>Get started with </Text>
          <Text style={styles._app_name}>Not Today</Text>
        </View>

        <TouchableOpacity style={styles._num_login_main} onPress={()=> props.navigation.navigate("PhoneNumber")}>
          <Flag width={25} height={25} fill={"#000"} />
          <Text style={styles._mob_num_code}>+1 (000)</Text>
          <Text style={styles._mob_num_heading}>Enter your mobile number</Text>
        </TouchableOpacity>
        <View style={styles._line_main}>
          <View style={styles._line} />
          <View>
            <Text style={styles._line_text}>Or connect with</Text>
          </View>
          <View style={styles._line} />
        </View>

        <View style={styles._social_login_main}>
          <TouchableOpacity style={styles._social_login_btn}>
            <Facebook width={22} height={22} fill={"#000"} />
            <Text style={styles._social_login_btn_text}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles._social_login_btn}>
            <Google width={22} height={22} fill={"#000"} />
            <Text style={styles._social_login_btn_text}>Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Signup;
