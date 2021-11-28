import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
function HomeCleaning(props) {
  let CardData = [
    {
      imagePath: require("./../../../assets/imagse/sliderImage.jpg"),
      price: "Start from $50",
      headign: "Common Space Cleaning",
      point1: "You can avail home common space clean by professional cleaner",
      point2: "Cleaner will provide service upto the mark",
    },
    {
      imagePath: require("./../../../assets/imagse/sliderImage.jpg"),
      price: "Start from $80",
      headign: "Home Deep Clean",
      point1: "Fllor deep clean, bathroom deep clean, kitchen deep clean",
      point2: "Professional cleaner",
    },
    {
      imagePath: require("./../../../assets/imagse/sliderImage.jpg"),
      price: "Start from $80",
      headign: "Bathroom Deep Clean",
      point1: "With machine clean",
      point2: "Wall, floor, basin, commode all included",
    },
  ];
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
          <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={15} color="#fff" />
          </TouchableOpacity>
          <Text style={styles._header_heading}>Home Cleaning</Text>
        </View>
        <TouchableOpacity style={styles._back_btn} onPress={()=> props.navigation.navigate("SearchCategory")}>
          <EvilIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView scrollToOverflowEnabled={false}>
        <Text style={styles._title}>7 services in Home Cleaning</Text>
        {CardData.map((v, i) => {
          return (
            <View style={styles._list_main} key={i}>
              <View style={styles._list_data}>
                <View style={styles._list__image_main}>
                  <Image source={v.imagePath} style={styles._list_img} />
                  <Text style={styles._price}>{v.price}</Text>
                </View>
                <View style={styles._list__data_main}>
                  <Text style={styles._list_heading}>{v.headign}</Text>
                  <View style={styles._list_point_main}>
                    <View style={styles._dot} />
                    <Text style={styles._list_point}>{v.point1}</Text>
                  </View>
                  <View style={styles._list_point_main}>
                    <View style={styles._dot} />
                    <Text style={styles._list_point}>{v.point2}</Text>
                  </View>
                </View>
              </View>
              <View style={styles._next_btn_main}>
                <TouchableOpacity style={styles._next_btn} onPress={()=> props.navigation.navigate("HomeDeepClean")}>
                  <Text style={styles._next_btn_text}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <View style={{ marginBottom: 30 }}></View>
      </ScrollView>
    </View>
  );
}
export default HomeCleaning;
