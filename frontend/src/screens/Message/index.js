import React from "react";
import styles from "./styles";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
function Message(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="transparent"
        translucent={false}
      />
      <ImageBackground
        source={require("./../../../assets/imagse/messaeg.png")}
        style={styles._image}
      >
        <View style={styles._data_main}>
          <View />
          <View>
            <Text style={styles._heading}>Thank You</Text>
            <Text style={styles._message}>
              Your request has been received and procesed.{"\n"}Please see your
              below confrmation
            </Text>
            <Text style={styles._request_id}>Request ID: QCED 1012354</Text>
            <Text style={styles._category_selected}>
              Deep Cleaning Service Details
            </Text>
            <View style={styles._user_data_main}>
              <View style={styles._user_data}>
                <Image
                  source={require("./../../../assets/imagse/profile.jpg")}
                  style={styles._profile_img}
                />
                <View style={styles._name_rating_main}>
                  <Text style={styles._user_name}>Alexa</Text>
                  <Text style={styles._rating}>4.5 stars</Text>
                </View>
              </View>
              <View style={styles._call_btn_main}>
                <TouchableOpacity style={styles._call_btn}>
                  <Ionicons name="ios-call-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._message_btn}>
                  <Feather name="mail" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles._services_data_main}>
              <View style={styles._user_data}>
                <Image
                  source={require("./../../../assets/imagse/profile.jpg")}
                  style={styles._profile_img}
                />
                <View style={styles._name_rating_main}>
                  <Text style={styles._services_heading}>
                    FNF deep cleaning servicecs
                  </Text>
                  <Text style={styles._service_provide}>
                    First class service provider
                  </Text>
                </View>
              </View>
              <View style={styles._id_main}>
                <Text style={styles._id}>H32KHS</Text>
              </View>
            </View>
            <Text style={styles._track}>Track Your Route</Text>
            <View style={styles._location_main}>
            <Ionicons name="location" size={15} color="white" />
              <Text style={styles._location}>Jackson Height, NY.</Text>
            </View>
          </View>
          <View />
        </View>
        <TouchableOpacity style={styles._next_btn} onPress={()=> props.navigation.navigate("YourLocation")}>
          <Text style={styles._next_btn_text}>CONFIRM</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
export default Message;
