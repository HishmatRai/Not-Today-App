import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
function HomeCleaning() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white-content"
        hidden={false}
        backgroundColor="#1EA3C8"
        translucent={false}
      />
      <View style={styles._header_main}>
        <View style={styles._header_back_icon_main}>
          <TouchableOpacity style={styles._back_btn}>
            <Ionicons name="chevron-back-sharp" size={15} color="#fff" />
          </TouchableOpacity>
          <Text style={styles._header_heading}>Home Cleaning</Text>
        </View>
        <TouchableOpacity style={styles._back_btn}>
          <EvilIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView scrollToOverflowEnabled={false}>
        <Text style={styles._title}>7 services in Home Cleaning</Text>
      </ScrollView>
    </View>
  );
}
export default HomeCleaning;
