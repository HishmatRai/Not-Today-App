import React from "react";
import styles from "./styles";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Map from "../../components/map";
function UserLocation(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="transparent"
        translucent={false}
      />
      <View style={styles._map}>
        <Map />
      </View>
      <View style={styles._data_main}>
        <Text style={styles._timing}>4 min away</Text>
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
        <TouchableOpacity style={styles._next_btn} onPress={()=> props.navigation.navigate("Rating")}>
          <Text style={styles._next_btn_text}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default UserLocation;
