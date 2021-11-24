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
import Cleaning from "./../../../assets/imagse/cleaning.svg";
import Renovation from "./../../../assets/imagse/renovation.svg";
import Paintroller from "./../../../assets/imagse/paint-roller.svg";
import Kitchen from "./../../../assets/imagse/kitchen.svg";
import Wrench from "./../../../assets/imagse/wrench.svg";
import Plumbing from "./../../../assets/imagse/plumbing.svg";
import Idea from "./../../../assets/imagse/idea.svg";
import Bathroom from "./../../../assets/imagse/bathroom.svg";
import Repair from "./../../../assets/imagse/repair.svg";
import Pctower from "./../../../assets/imagse/pc-tower.svg";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
function Home(props) {
  const [search, setSearch] = React.useState("");
  let SliderData = [
    {
      discount: "40%",
    },
    {
      discount: "20%",
    },
    {
      discount: "30%",
    },
  ];

  let CategoryList = [
    {
      icon: <Cleaning width={"50%"} height={"50%"} fill={"#000"} />,
      title: "Home Cleaning",
    },
    {
      icon: <Renovation width={"50%"} height={"50%"} fill={"#000"} />,
      title: "Home Remodeling",
    },
    {
      icon: <Paintroller width={"50%"} height={"50%"} fill={"#000"} />,
      title: "Interior Painting",
    },
    {
      icon: <Kitchen width={"50%"} height={"50%"} fill={"#000"} />,
      title: "Kitchen Cleaning",
    },
    {
      icon: <Wrench width={"50%"} height={"50%"} fill={"#000"} />,
      title: "Handyman",
    },
    {
      icon: <Plumbing width={"50%"} height={"50%"} fill={"#000"} />,
      title: "Plumbing",
    },
    {
      icon: <Idea width={"50%"} height={"50%"} fill={"#000"} />,
      title: "Electrical",
    },
    {
      icon: <Bathroom width={"50%"} height={"50%"} fill={"#000"} />,
      title: "Toilet Cleaning",
    },
    {
      icon: <Repair width={"50%"} height={"50%"} fill={"#000"} />,
      title: "AC Repair",
    },
    {
      icon: <Pctower width={"50%"} height={"50%"} fill={"#000"} />,
      title: " Electronics Repair",
    },
  ];

  let RecommendedList = [
    {
      title: "Home Cleaning",
      rating: "4.5",
      price: "$10",
    },
    {
      title: "Home Cleaning",
      rating: "4.5",
      price: "$10",
    },
    {
      title: "Home Cleaning",
      rating: "4.5",
      price: "$10",
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
              {SliderData.map((v, i) => {
                return (
                  <View style={styles._slider} key={i}>
                    <Image
                      source={require("./../../../assets/imagse/sliderImage.jpg")}
                      style={styles._slider_img}
                    />
                    <View style={styles._discount_main}>
                      <Text style={styles._presentage}>{v.discount}</Text>
                      <Text style={styles._discount}>Discount</Text>
                      <Text style={styles._discount_title}>
                        For Home Cleaning
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles._category_main}>
            {CategoryList.map((v, i) => {
              return (
                <View style={styles._category} key={i}>
                  <TouchableOpacity style={styles._category_icon_main}>
                    {v.icon}
                  </TouchableOpacity>
                  <Text style={styles._category_title}>{v.title}</Text>
                </View>
              );
            })}
          </View>

          <View style={styles._recemmended_main}>
            <Text style={styles._recemmended}>Recommended for you</Text>
            <TouchableOpacity style={styles._see_all_btn}>
              <Text style={styles._see_all_btn_text}>See All</Text>
              <Entypo name="chevron-small-right" size={15} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles._rec_slider_main}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {RecommendedList.map((v, i) => {
                return (
                  <View style={styles._res_slider} key={i}>
                    <Image
                      source={require("./../../../assets/imagse/sliderImage.jpg")}
                      style={styles._res_slider_img}
                    />
                    <Text style={styles._rec_slider_title}>{v.title}</Text>
                    <View style={styles._rating_main}>
                      <View style={styles._rating}>
                        <FontAwesome name="star" size={15} color="#FECB03" />
                        <Text style={styles._rating_show}>{v.rating}</Text>
                      </View>
                      <View style={styles._rating}>
                        <Text style={styles._start_heading}>Start From</Text>
                        <Text style={styles._price_show}>{v.price}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <Tabs path={props.navigation} />
    </View>
  );
}
export default Home;
