import React from "react";
import styles from "./styles";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbtn";
import ConfirmationCode from "../../../components/confirmation-code";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
function Otp(props) {
  const [dataShow, setDataShow] = React.useState(false);

  let inputFocus = () => {
    setDataShow(true);
  };
  let inputNotFocused = () => {
    setDataShow(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={false}
      />
      <ImageBackground
        source={require("./../../../../assets/imagse/bgImage2.png")}
        style={styles._image}
      >
        <TouchableOpacity
          style={styles._header_main}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles._header_heading}>Confirm Phone Number</Text>
        </TouchableOpacity>

        <Text style={styles._heading}>Type the 4 digit code sent to this</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles._mob_number}>number </Text>
          <Text style={styles._mob_number}>+1 (000) 12345678</Text>
        </View>
        <View style={styles._confirmation_code}>
          <ConfirmationCode
            inputFocus={inputFocus}
            inputNotFocused={inputNotFocused}
          />
        </View>
        <View style={styles._counter}>
          <Text style={styles.resend_heading}>Recent code in</Text>
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={[
              ["white", 0.4],
              // ['#F7B801', 0.4],
              // ['#A30000', 0.2],
            ]}
            size={20}
            strokeWidth={2}
            trailColor="#1ED760"
          >
            {({ remainingTime }) => (
              <Animated.Text style={styles._timer}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
        <TouchableOpacity>
          <Text style={styles._change_mon_num}>Change Phone Number</Text>
        </TouchableOpacity>
        {dataShow ? null : (
          <View style={styles._privacy_main}>
            <Text style={styles._message}>
              By logging in or registering, you agree to our{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <TouchableOpacity>
                <Text style={styles._privacy_btn_text}>Terms of Service</Text>
              </TouchableOpacity>
              <Text style={styles._message}> and </Text>
              <TouchableOpacity>
                <Text style={styles._privacy_btn_text}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <BgColorButton
          bgColor="#18A6CC"
          buttonValue="Continue"
          marginTop={hp("3%")}
          path={() => props.navigation.navigate("SelectLocation")}
        />
      </ImageBackground>
    </View>
  );
}
export default Otp;
