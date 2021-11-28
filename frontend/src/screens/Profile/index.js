import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import About from "../../components/About";
import Orders from "../../components/Orders";
import * as ImagePicker from "expo-image-picker";
function Profile(props) {
  const [image, setImage] = React.useState(null);
  const [tab, setTab] = React.useState("about");
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
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
            <Text style={styles._header_heading}>Profile </Text>
          </View>
          <TouchableOpacity style={styles._back_btn}>
            <Ionicons name="ios-notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {tab === "about" ? (
        <>
          <View style={styles._profile_img_main}>
            {image === null ? (
              <Image
                source={require("./../../../assets/imagse/profile.jpg")}
                style={styles._profile_img}
              />
            ) : (
              <Image source={{ uri: image }} style={styles._profile_img} />
            )}
            <TouchableOpacity style={styles._camera_btn} onPress={pickImage}>
              <Ionicons name="camera" size={24} color="#8E8E8E" />
            </TouchableOpacity>
          </View>
          <Text style={styles._name}>Johan Smith</Text>
          <Text style={styles._email}>Johan@gmail.com</Text>
        </>
      ) : (
        <View style={styles._order_profile_main}>
          <Image
            source={require("./../../../assets/imagse/profile.jpg")}
            style={styles._order_profile_img}
          />
          <View>
            <Text style={styles._order_name}>Johan Smith</Text>
            <Text style={styles._email}>Johan@gmail.com</Text>
          </View>
        </View>
      )}
      {tab === "about" ? (
        <View style={styles._tabs_main}>
          <TouchableOpacity
            style={styles._active_tabs}
            onPress={() => setTab("about")}
          >
            <Text style={styles._tabs_title}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles._tabs}
            onPress={() => setTab("orders")}
          >
            <Text style={styles._tabs_title}>Orders</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles._tabs_main}>
          <TouchableOpacity
            style={styles._tabs}
            onPress={() => setTab("about")}
          >
            <Text style={styles._tabs_title}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles._active_tabs}
            onPress={() => setTab("orders")}
          >
            <Text style={styles._tabs_title}>Orders</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView>
        <View style={styles._tabs_data}>
          {tab === "about" ? <About /> : <Orders />}
        </View>
      </ScrollView>
    </View>
  );
}
export default Profile;
