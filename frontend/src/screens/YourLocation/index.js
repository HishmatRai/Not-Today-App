import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Map from "../../components/map";
function YourLocation(props) {
  const [search, setSearch] = React.useState("");
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white-content"
        hidden={false}
        backgroundColor="#1EA3C8"
        translucent={false}
      />
      <View style={styles._header_main}>
        <View style={styles._header_title_main}>
          <View style={styles._header_back_icon_main}>
            <TouchableOpacity
              style={styles._back_btn}
              onPress={() => props.navigation.goBack()}
            >
              <Ionicons name="chevron-back-sharp" size={15} color="#fff" />
            </TouchableOpacity>
            <Text style={styles._header_heading}>Set your Location</Text>
          </View>
          <View style={styles._back_btn} />
        </View>
        <View style={styles._input_main}>
          <Ionicons name="location" size={15} color="#193628" />
          <TextInput
            placeholder="075 Gislason Rapids, New Reaga…"
            value={search}
            onChangeText={(search) => setSearch(search)}
            style={styles._input}
            underlineColor="#575656"
            placeholderTextColor="#575656"
          />
        </View>
      </View>
      <Map />
      <TouchableOpacity
        style={styles._next_btn}
        onPress={() => props.navigation.navigate("DateTime")}
      >
        <Text style={styles._next_btn_text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
export default YourLocation;
