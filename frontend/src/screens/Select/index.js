import React from "react";
import styles from "./styles";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Logo from "./../../../assets/imagse/Logo.svg";
function Select(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor="#5EBDD7"
        translucent={false}
      />
      <ImageBackground
        source={require("./../../../assets/imagse/select.png")}
        style={styles._image}
      >
        <View style={styles._main}>
          <View />
          <View style={styles._logo_main}>
            <Logo width={"100%"} height={"100%"} fill={"#000"} />
          </View>
          <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("Login")}>
            <Text style={styles.btn_text}>Login as Service provider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("Login")}>
            <Text style={styles.btn_text}>Login as Customer</Text>
          </TouchableOpacity>
        </View>
        <View />
      </ImageBackground>
    </View>
  );
}
export default Select;
