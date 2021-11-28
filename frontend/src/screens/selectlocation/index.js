import React from "react";
import styles from "./styles";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
function SelectLocation(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="#fff"
        translucent={false}
      />
      <ImageBackground
        source={require("./../../../assets/imagse/bgImage2.png")}
        style={styles._image}
      >
        <View style={styles._logo_main}>
          <Image
            source={require("./../../../assets/imagse/selectLocImg.png")}
            style={styles._card_img}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._heading}>Location access is Important</Text>
          <Text style={styles._message}>
            Provide us your location so that we can {"\n"}show the available
            services, offers and {"\n"}assign suitable service providers near
            you{"\n"} to ensure the fastest service possible.
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("YourLocation")}>
            <MaterialIcons name="my-location" size={24} color="white" />
            <Text style={styles.btn_text}>My current location </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("YourLocation")}>
            <Text style={styles.btn_text}>Search location </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
            <Text style={styles._skip_btn_text}>Skip for now</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default SelectLocation;
