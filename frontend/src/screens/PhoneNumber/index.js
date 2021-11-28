import React from "react";
import styles from "./styles";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CoutryCodePicker from "./../../../../CountryCodePicker";
import BgColorButton from "../../components/button/bgcolorbtn";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
function PhoneNumber(props) {
  const [mobileNumber, setMobileNumber] = React.useState("");
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={false}
      />
      <ImageBackground
        source={require("./../../../assets/imagse/bgImage2.png")}
        style={styles._image}
      >
        <TouchableOpacity
          style={styles._header_main}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles._header_heading}>Phone Number</Text>
        </TouchableOpacity>

        <Text style={styles._heading}>Continue using your phone number</Text>

        <View style={styles._country_code_main}>
          <TouchableOpacity style={styles._code_picker}>
            <CoutryCodePicker />
          </TouchableOpacity>
          <TextInput
            placeholder="12345678"
            value={mobileNumber}
            onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
            style={styles._input}
            underlineColor="#000000"
            placeholderTextColor="#000000"
            autoFocus={true}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles._message}>
          By continuing you may receive an SMS for verification. Message and
          data rates may apply.
        </Text>

        <BgColorButton
          bgColor="#18A6CC"
          buttonValue="Continue"
          marginTop={hp("10%")}
          path={()=> props.navigation.navigate("Otp")}
        />
      </ImageBackground>
    </View>
  );
}
export default PhoneNumber;
