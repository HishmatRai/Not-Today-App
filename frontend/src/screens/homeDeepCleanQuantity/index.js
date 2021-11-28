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
import { Entypo } from "@expo/vector-icons";
function homeDeepCleanQuantity(props) {
  const [mainItemCounter, setMainItemCounter] = React.useState(1);
  const [CardData, setCardData] = React.useState([
    {
      imagePath: require("./../../../assets/imagse/sliderImage.jpg"),
      title: "Bed Room",
      itemsCounter: 4,
    },
    {
      imagePath: require("./../../../assets/imagse/sliderImage.jpg"),
      title: "Bathroom",
      itemsCounter: 4,
    },
    {
      imagePath: require("./../../../assets/imagse/sliderImage.jpg"),
      title: "Balcony",
      itemsCounter: 3,
    },
    {
      imagePath: require("./../../../assets/imagse/sliderImage.jpg"),
      title: "Kitchen",
      itemsCounter: 3,
    },
    {
      imagePath: require("./../../../assets/imagse/sliderImage.jpg"),
      title: "Balcony",
      itemsCounter: 3,
    },
    {
      imagePath: require("./../../../assets/imagse/sliderImage.jpg"),
      title: "Balcony",
      itemsCounter: 3,
    },
  ]);
  let ItemCounterIncrement = (i) => {
    CardData[i].itemsCounter = CardData[i].itemsCounter + 1;
    setCardData([...CardData]);
  };
  let ItemCounterDecrement = (i) => {
    if (CardData[i].itemsCounter > 0) {
      CardData[i].itemsCounter = CardData[i].itemsCounter - 1;
      setCardData([...CardData]);
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
        <View style={styles._header_back_icon_main}>
          <TouchableOpacity style={styles._back_btn}  onPress={() => props.navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={15} color="#fff" />
          </TouchableOpacity>
          <Text style={styles._header_heading}>Home Cleaning</Text>
        </View>
        <TouchableOpacity style={styles._back_btn} onPress={()=> props.navigation.navigate("SearchCategory")}>
          <EvilIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView scrollToOverflowEnabled={false}>
        <Text style={styles._title}>1600-2000 sqft</Text>
        <View style={styles._select_items_main}>
          <View style={styles._price_main}>
            <Text style={styles._list_heading}>$160</Text>
            <Text style={styles._unit}>/ Unit</Text>
          </View>
          <View style={styles._price_main}>
            <Text style={styles._list_heading}>Qty: </Text>
            <View style={styles._counter_main}>
              <TouchableOpacity
                style={styles._increment_btn}
                onPress={() =>
                  setMainItemCounter(
                    mainItemCounter >= 1 ? mainItemCounter - 1 : 0
                  )
                }
              >
                <Entypo name="minus" size={24} color="white" />
              </TouchableOpacity>
              <View style={styles._counter_show_main}>
                <Text style={styles._counter_show}>{mainItemCounter}</Text>
              </View>
              <TouchableOpacity
                style={styles._increment_btn}
                onPress={() => setMainItemCounter(mainItemCounter + 1)}
              >
                <Entypo name="plus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles._list_main}>
          {CardData.map((v, i) => {
            return (
              <View style={styles._card_min} key={i}>
                <Image source={v.imagePath} style={styles._card_image} />
                <Text style={styles._card_headign}>{v.title}</Text>
                <View style={styles._counter_main}>
                  <TouchableOpacity
                    style={styles._increment_btn}
                    onPress={() => ItemCounterDecrement(i)}
                  >
                    <Entypo name="minus" size={24} color="white" />
                  </TouchableOpacity>
                  <View style={styles._counter_show_main}>
                    <Text style={styles._counter_show}>{v.itemsCounter}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles._increment_btn}
                    onPress={() => ItemCounterIncrement(i)}
                  >
                    <Entypo name="plus" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
        <Text style={styles._note}>Note:</Text>
        <View style={styles._list_point_main}>
          <View style={styles._dot} />
          <Text style={styles._list_point}>
            Floor deep clean, Bathroom deep clean, Kitchen deep clean
          </Text>
        </View>
        <View style={styles._list_point_main}>
          <View style={styles._dot} />
          <Text style={styles._list_point}>
            For additional work need to add the service
          </Text>
        </View>
        <View style={styles._next_btn_main}>
          <TouchableOpacity style={styles._next_btn} onPress={()=> props.navigation.navigate("YourLocation")}>
            <Text style={styles._next_btn_text}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 30 }}></View>
      </ScrollView>
    </View>
  );
}
export default homeDeepCleanQuantity;
