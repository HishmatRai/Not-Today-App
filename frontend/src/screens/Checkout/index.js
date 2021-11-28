import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./styles";
import {
  Ionicons,
  EvilIcons,
  Entypo,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
function Checkout(props) {
  const [message, setMessage] = React.useState("");
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
            <Text style={styles._header_heading}>Checkout</Text>
          </View>
          <View style={styles._shopping_main}>
            <TouchableOpacity style={styles._back_btn}>
              <Entypo name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles._back_btn}
              onPress={() => props.navigation.navigate("SearchCategory")}
            >
              <EvilIcons name="search" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles._add_to_card_show_main}>
            <Text style={styles._add_to_card_show}>0</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._card_main}>
          <View style={styles._card_header_main}>
            <View style={styles._card_header_main}>
              <FontAwesome5 name="clock" size={15} color="#1EA3C8" />
              <Text style={styles._card_header_title}>Schedule</Text>
            </View>
            <TouchableOpacity style={styles._card_header_main}  onPress={() => props.navigation.navigate("DateTime")}>
              <MaterialIcons name="edit" size={15} color="black" />
              <Text style={styles._card_header_title}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles._schedule_date_time_main}>
            <View>
              <Text style={styles._schedule_date_title}>Schedule Date</Text>
              <View style={styles._date_show_main}>
                <Text style={styles._date_show}>20</Text>
                <View style={styles._day_main}>
                  <Text style={styles._day}>Nov 2021</Text>
                  <Text style={styles._day}>Today</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles._schedule_date_title}>Schedule Time</Text>
              <View style={styles._date_show_main}>
                <Text style={styles._date_show}>8 - 9 am</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles._card_main}>
          <View style={styles._card_header_main}>
            <View style={styles._card_header_main}>
              <Ionicons name="location" size={15} color="#1EA3C8" />
              <Text style={styles._card_header_title}>Ordered For</Text>
            </View>
            <TouchableOpacity style={styles._card_header_main} onPress={() => props.navigation.navigate("Home")}>
              <MaterialIcons name="edit" size={15} color="black" />
              <Text style={styles._card_header_title}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles._order_data_main}>
            <View style={styles._order_address_main}>
              <Text style={styles._name}>Mahmudul Hassan</Text>
              <Text style={styles._name}>
                House: 06, Road: 21, Sector: 10, Uttara, Dhaka
              </Text>
            </View>
            <View style={styles._order_mobile_main}>
              <Text style={styles._name}>+8801618056615</Text>
            </View>
          </View>
        </View>
        <View style={styles._card_main}>
          <View style={styles._card_header_main}>
            <View style={styles._card_header_main}>
              <AntDesign name="tag" size={15} color="#1EA3C8" />
              <Text style={styles._card_header_title}>Promo</Text>
            </View>
            <TouchableOpacity style={styles._card_header_main}>
              <Entypo name="plus" size={15} color="black" />
              <Text style={styles._card_header_title}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles._card_main}>
          <View style={styles._card_header_main}>
            <View style={styles._card_header_main}>
              <FontAwesome5 name="money-bill" size={15} color="#1EA3C8" />
              <Text style={styles._card_header_title}>Bill</Text>
            </View>
            <TouchableOpacity style={styles._card_header_main} onPress={() => props.navigation.navigate("homeDeepCleanQuantity")}>
              <MaterialIcons name="edit" size={15} color="black" />
              <Text style={styles._card_header_title}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles._selected_item_main}>
            <Text style={styles._selected_item_heading}>Home Deep Clean</Text>
            <View style={styles._selected_item_size_main}>
              <Text style={styles._selected_item_size_title}>
                1200 sft - 1600 sft x 1
              </Text>
              <Text style={styles._selected_item_size_price}>$160</Text>
            </View>
          </View>
          <View style={styles._line} />
          <View style={styles._selected_item_size_main}>
            <Text style={styles._selected_item_heading}>Sub Total</Text>
            <Text style={styles._selected_item_size_price}>$160</Text>
          </View>
          <View style={styles._selected_item_size_main}>
            <Text style={styles._selected_item_heading}>Delivery Charge</Text>
            <Text style={styles._selected_item_size_price}>$0</Text>
          </View>
          <View style={styles._selected_item_size_main}>
            <Text style={styles._discount}>Delivery Charge</Text>
            <Text style={styles._discount}>$0</Text>
          </View>
          <View style={styles._line} />
          <View style={styles._selected_item_size_main}>
            <Text style={styles._total_amount}>Amount to be paid</Text>
            <Text style={styles._total_amount}>$160</Text>
          </View>
        </View>
        <View style={styles._about_product_main}>
          <Text style={styles._about_product_title}>
            * Pricess are VAT exclusive
          </Text>
          <Text style={styles._about_product_title}>
            * Price may vary depending on product availability
          </Text>
        </View>
        <View style={styles._card_main}>
          <View style={styles._card_header_main}>
            <View style={styles._card_header_main}>
              <AntDesign name="addfile" size={15} color="#1EA3C8" />
              <Text style={styles._card_header_title}>Additional Info</Text>
            </View>
          </View>
          <Text style={styles._info_heading}>
            Do you wish to tell anything else to your service provider?
          </Text>
          <View style={styles._input_main}>
            <TextInput
              placeholder="Write your message here..."
              value={message}
              onChangeText={(message) => setMessage(message)}
              style={styles._input}
              underlineColor="#717171"
              placeholderTextColor="#717171"
              multiline={true}
            />
          </View>
        </View>
        <View style={styles._about_product_main}>
          <Text style={styles._Agrement}>
            By placing order, I agree to the terms & conditions
          </Text>
        </View>
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
      <TouchableOpacity style={styles._next_btn}  onPress={() => props.navigation.navigate("BookingPayment")}>
        <Text style={styles._next_btn_text}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Checkout;
