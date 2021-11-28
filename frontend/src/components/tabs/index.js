import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import OrderIcon from "./../../../assets/imagse/order.svg";
import Credit from "./../../../assets/imagse/Credit.svg";
function Tabs(props) {
  return (
    <View>
      <LinearGradient
        // Button Linear Gradient
        end={[1.0, 0.5]}
        start={[0.0, 0.5]}
        locations={[0.0, 1.0]}
        colors={["#105878", "#5EBDD7"]}
        style={styles.container}
      >
        <TouchableOpacity style={styles._tab} onPress={()=> props.path.navigate("Home")}>
          <FontAwesome5 name="home" size={23} color="white" />
          <Text style={styles._tab_title}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._tab} onPress={()=> props.path.navigate("Profile")}>
          <OrderIcon width={18} height={24} fill={"#000"} />
          <Text style={styles._tab_title}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._tab} onPress={()=> props.path.navigate("BookingPayment")}>
          <Credit width={24} height={24} fill={"#000"} />
          <Text style={styles._tab_title}>Credit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._tab} onPress={()=> props.path.navigate("Profile")}>
          <FontAwesome name="user-circle" size={24} color="white" />
          <Text style={styles._tab_title}>Profile</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
export default Tabs;
