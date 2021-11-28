import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
function Orders() {
  let CardData = [
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      heading: "FNF Cleaning Service",
      quantity: "Quantity: 1",
      time: "Ordered on: 25/5/19 at 07:56 pm",
      price: "$340",
    },
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      heading: "FNF Cleaning Service",
      quantity: "Quantity: 1",
      time: "Ordered on: 25/5/19 at 07:56 pm",
      price: "$320",
    },
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      heading: "FNF Cleaning Service",
      quantity: "Quantity: 1",
      time: "Ordered on: 25/5/19 at 07:56 pm",
      price: "$380",
    },
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      heading: "FNF Cleaning Service",
      quantity: "Quantity: 1",
      time: "Ordered on: 25/5/19 at 07:56 pm",
      price: "$300",
    },
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      heading: "FNF Cleaning Service",
      quantity: "Quantity: 1",
      time: "Ordered on: 25/5/19 at 07:56 pm",
      price: "$320",
    },
    {
      imagePath: require("./../../../assets/imagse/profile.jpg"),
      heading: "FNF Cleaning Service",
      quantity: "Quantity: 1",
      time: "Ordered on: 25/5/19 at 07:56 pm",
      price: "$340",
    },
  ];
  return (
    <View>
      {CardData.map((v, i) => {
        return (
          <View style={styles._card_main} key={i}>
            <View style={styles._img_main}>
              <Image source={v.imagePath} style={styles._profile_img} />
            </View>
            <View style={styles._card_data_main}>
              <Text style={styles._heading}>{v.heading}</Text>
              <Text style={styles._quantity_title}>{v.quantity}</Text>
              <Text style={styles._date}>{v.time}</Text>
            </View>
            <View style={styles._price_main}>
              <Text style={styles._price}>{v.price}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
export default Orders;
