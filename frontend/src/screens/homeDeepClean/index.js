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
function HomeDeepClean(props) {
  let CardData = [
    {
      heading: "Upto 800 sqft",
      price: "$80",
      unit: "/ Unit",
    },
    {
      heading: "800 sqft - 1200 sqft",
      price: "$100",
      unit: "/ Unit",
    },
    {
      heading: "1200 sqft - 1600 sqft",
      price: "$120",
      unit: "/ Unit",
    },
    {
      heading: "1600 sqft - 2000 sqft",
      price: "$140",
      unit: "/ Unit",
    },
    {
      heading: "2000 sqft - 2500 sqft",
      price: "$160",
      unit: "/ Unit",
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
          <Text style={styles._header_heading}>Home deep clean</Text>
        </View>
        <TouchableOpacity style={styles._back_btn} onPress={()=> props.navigation.navigate("SearchCategory")}>
          <EvilIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView scrollToOverflowEnabled={false}>
        <Text style={styles._title}>Choose a service</Text>
        {CardData.map((v, i) => {
          return (
            <View style={styles._list_main} key={i}>
              <View style={styles._list__image_main}>
                <Text style={styles._list_heading}>{v.heading}</Text>
                <View style={styles._price_main}>
                  <Text style={styles._list_heading}>{v.price}</Text>
                  <Text style={styles._unit}>{v.unit}</Text>
                </View>
              </View>
              <View style={styles._list__data_main}>
                <TouchableOpacity style={styles._next_btn} onPress={()=> props.navigation.navigate("homeDeepCleanQuantity")}>
                  <Text style={styles._next_btn_text}>Continue</Text>
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
export default HomeDeepClean;
