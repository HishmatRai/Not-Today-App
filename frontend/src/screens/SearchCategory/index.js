import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import styles from "./styles";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
function SearchCategory(props) {
  const [selectedCard, setSelectedCard] = React.useState();
  const [search, setSearch] = React.useState("");
  let ClickCard = (i) => {
    setSelectedCard(i);
    props.navigation.navigate("Message");
  };
  let CardData = [
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      name: "Neil Gondalez",
      address: "996 Daine Street",
      distance: "1.1 km",
    },
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      name: "Neil Gondalez",
      address: "996 Daine Street",
      distance: "1.1 km",
    },
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      name: "Neil Gondalez",
      address: "996 Daine Street",
      distance: "1.1 km",
    },
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      name: "Neil Gondalez",
      address: "996 Daine Street",
      distance: "1.1 km",
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
        <View style={styles._header_title_main}>
          <View style={styles._header_back_icon_main}>
            <TouchableOpacity
              style={styles._back_btn}
              onPress={() => props.navigation.goBack()}
            >
              <Ionicons name="chevron-back-sharp" size={15} color="#fff" />
            </TouchableOpacity>
            <Text style={styles._header_heading}>
              Search For Deep Cleaning services{" "}
            </Text>
          </View>
          <View style={styles._back_btn} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._location_main}>
          <View style={styles._location_show_main}>
            <Ionicons name="location" size={15} color="#1EA3C8" />
            <Text style={styles._location}>
              075 Gislason Rapids, New Reaga…
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles._change_btn_text}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._input_main}>
          <TextInput
            placeholder="Search MOM's........"
            value={search}
            onChangeText={(search) => setSearch(search)}
            style={styles._input}
            underlineColor="#4D4D4D"
            placeholderTextColor="#4D4D4D"
          />
          <TouchableOpacity>
            <Ionicons name="search-outline" size={15} color="#676767" />
          </TouchableOpacity>
        </View>
        <View style={styles._popular_main}>
          <TouchableOpacity>
            <Text style={styles._popular}>Most Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles._near_by_you}>Near by you</Text>
          </TouchableOpacity>
        </View>
        {CardData.map((v, i) => {
          return (
            <TouchableOpacity
              style={
                selectedCard === i ? styles._card_main : styles._card_main2
              }
              key={i}
              onPress={() => ClickCard(i)}
            >
              <View style={styles._profile_main}>
                <Image source={v.imagePath} style={styles._profile_img} />
                <View style={styles._user_data_main}>
                  <Text style={styles._user_name}>{v.name}</Text>
                  <View style={styles._user_location_main}>
                    <Ionicons name="location" size={15} color="#662972" />
                    <Text style={styles._user_location}>{v.address}</Text>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <AntDesign name="hearto" size={24} color="#24A19C" />
                <View style={styles._distance_main}>
                  <Text style={styles._distance}>{v.distance}</Text>
                  <FontAwesome name="send" size={10} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
      <TouchableOpacity
        style={styles._next_btn}
        onPress={() => props.navigation.navigate("Message")}
      >
        <Text style={styles._next_btn_text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
export default SearchCategory;
