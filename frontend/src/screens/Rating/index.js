import React from "react";
import styles from "./styles";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RatingCom from "../../components/Rating";
function Rating(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={false}
      />
      <View style={styles._data_main}>
        <View style={styles._main_icon}>
          <AntDesign name="like1" size={40} color="white" />
        </View>
        <Text style={styles._heading}>Your service has been Completed</Text>
        <Text style={styles._heading2}>Please provide us with your review</Text>
        <Text style={styles._name}>Alexa</Text>
        <Text style={styles._id}>XYZ-182</Text>
        <View style={styles._profile_img_main}>
          <Image
            source={require("./../../../assets/imagse/profile.jpg")}
            style={styles._profile_img}
          />
          <View style={styles._rating_show_main}>
            <Text style={styles._rating_show}>4.9</Text>
          </View>
        </View>
        <View style={styles._rating_main}>
          <Text style={styles._rating_category}>Staff's Behaviour</Text>
          <RatingCom />
        </View>
        <View style={styles._rating_main}>
          <Text style={styles._rating_category}>Staff's Professionalism</Text>
          <RatingCom />
        </View>
        <View style={styles._rating_main}>
          <Text style={styles._rating_category}>Machine Condition</Text>
          <RatingCom />
        </View>
        <View style={styles._rating_main}>
          <Text style={styles._rating_category}>
            Overall Service Experience
          </Text>
          <RatingCom />
        </View>
        <TouchableOpacity style={styles._next_btn} onPress={()=> props.navigation.navigate("Home")}>
          <Text style={styles._next_btn_text}>SUBMIT RATING</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Rating;
