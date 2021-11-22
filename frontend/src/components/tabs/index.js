import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
function Tabs() {
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
        <TouchableOpacity style={styles._tab}>
          <FontAwesome5 name="home" size={24} color="white" />
          <Text style={styles._tab_title}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._tab}>
          <FontAwesome5 name="home" size={24} color="white" />
          <Text style={styles._tab_title}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._tab}>
          <FontAwesome5 name="home" size={24} color="white" />
          <Text style={styles._tab_title}>Credit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._tab}>
        <FontAwesome name="user-circle" size={24} color="white" />
          <Text style={styles._tab_title}>Profile</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
export default Tabs;
