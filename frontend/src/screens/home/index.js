import React from "react";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Tabs from "../../components/tabs";
function Home(props) {
  const [search, setSearch] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="#fff"
        translucent={false}
      />
      <View style={styles._header_main}>
        <ImageBackground
          source={require("./../../../assets/imagse/headerImg.png")}
          style={styles.header_bg_image}
        >
          <View style={styles._header_head_main}>
            <View style={styles._header_profile_main}>
              <Image
                source={require("./../../../assets/imagse/profile.jpg")}
                style={styles._profile_img}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles._user_message}>
                  Hi Smith, Good Morning !
                </Text>
                <View style={styles._header_location_main}>
                  <Ionicons name="ios-location-sharp" size={12} color="white" />
                  <Text style={styles._address}>California, USA</Text>
                </View>
              </View>
            </View>
            <View style={styles._header_notification_icon_main}>
              <TouchableOpacity style={styles._notification_icon}>
                <Ionicons
                  name="ios-notifications-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles._setting_icon}>
                <Feather name="settings" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles._input_main}>
            <TextInput
              placeholder="Search for services"
              value={search}
              onChangeText={(search) => setSearch(search)}
              style={styles._input}
              underlineColor="#575656"
              placeholderTextColor="#575656"
            />
            <TouchableOpacity>
              <Ionicons name="search-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._slider_main}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles._slider}>
                <Image
                  source={require("./../../../assets/imagse/sliderImage.png")}
                  style={styles._slider_img}
                />
              </View>
              <View style={styles._slider}>
                <Image
                  source={require("./../../../assets/imagse/sliderImage.png")}
                  style={styles._slider_img}
                />
              </View>
              <View style={styles._slider}>
                <Image
                  source={require("./../../../assets/imagse/sliderImage.png")}
                  style={styles._slider_img}
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <Tabs />
    </View>
  );
}
export default Home;
