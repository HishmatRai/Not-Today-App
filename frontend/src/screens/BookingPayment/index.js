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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Amazon from "./../../../assets/imagse/Amazon.svg";
import Card from "./../../../assets/imagse/Card.svg";
import Cash from "./../../../assets/imagse/Cash.svg";
function BookingPayment(props) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState(2);
  const [carNumber, setCardNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [code, setCode] = React.useState("");
  let AmazonPay = () => {
    setSelectedPaymentMethod(1);
  };
  let CreditCard = () => {
    setSelectedPaymentMethod(2);
  };
  let CashOnDelivery = () => {
    setSelectedPaymentMethod(3);
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
            <Text style={styles._header_heading}>Booking & Payment</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._card_main}>
          <View style={styles._card_header_main}>
            <View style={styles._card_header_main}>
              <FontAwesome5 name="money-bill" size={15} color="#1EA3C8" />
              <Text style={styles._card_header_title}>Bill</Text>
            </View>
            <TouchableOpacity style={styles._card_header_main}>
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
        <Text style={styles._heading}>Select payment Method</Text>
        <TouchableOpacity
          style={styles._payment_method_main}
          onPress={AmazonPay}
        >
          <View style={styles._payment_method_title_main}>
            <Amazon width={28} height={23} fill={"#000"} />
            {selectedPaymentMethod === 1 ? (
              <Text style={styles._payment_method_title_selected}>
                Amazon Pay
              </Text>
            ) : (
              <Text style={styles._payment_method_title}>Amazon Pay</Text>
            )}
          </View>
          {selectedPaymentMethod === 1 ? (
            <View style={styles._payment_method_selected}>
              <View style={styles._payment_method_selected_bg} />
            </View>
          ) : (
            <View style={styles._payment_method_selected}>
              <View style={styles._payment_method_withoutselected_bg} />
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._payment_method_main}
          onPress={CreditCard}
        >
          <View style={styles._payment_method_title_main}>
            <Card width={28} height={23} fill={"#000"} />
            {selectedPaymentMethod === 2 ? (
              <Text style={styles._payment_method_title_selected}>
                Credit Card
              </Text>
            ) : (
              <Text style={styles._payment_method_title}>Credit Card</Text>
            )}
          </View>
          {selectedPaymentMethod === 2 ? (
            <View style={styles._payment_method_selected}>
              <View style={styles._payment_method_selected_bg} />
            </View>
          ) : (
            <View style={styles._payment_method_selected}>
              <View style={styles._payment_method_withoutselected_bg} />
            </View>
          )}
        </TouchableOpacity>
        {selectedPaymentMethod === 2 ? (
          <View style={styles._card_payment_main}>
            <Text style={styles._card_input_heading}>Card Holder Name</Text>
            <View style={styles._input_main}>
              <TextInput
                placeholder="Card Number"
                value={carNumber}
                onChangeText={(carNumber) => setCardNumber(carNumber)}
                style={styles._input}
                underlineColor="#000"
                placeholderTextColor="#000"
                keyboardType={"numeric"}
              />
            </View>
            <Text style={styles._card_input_heading}>Card Holder Name</Text>
            <View style={styles._input_main}>
              <TextInput
                placeholder="Card Holder Name"
                value={name}
                onChangeText={(name) => setName(name)}
                style={styles._input}
                underlineColor="#000"
                placeholderTextColor="#000"
              />
            </View>
            <View style={styles._code_main}>
              <View style={styles._code}>
                <Text style={styles._card_input_heading}>Expire Date</Text>
                <View style={styles._input_main}>
                  <TextInput
                    placeholder="MM  / YY"
                    value={date}
                    onChangeText={(date) => setDate(date)}
                    style={styles._input}
                    underlineColor="#000"
                    placeholderTextColor="#000"
                    keyboardType={"numeric"}
                  />
                </View>
              </View>
              <View style={styles._code}>
                <Text style={styles._card_input_heading}>Security Code</Text>
                <View style={styles._input_main}>
                  <TextInput
                    placeholder="CVV"
                    value={code}
                    onChangeText={(code) => setCode(code)}
                    style={styles._input}
                    underlineColor="#000"
                    placeholderTextColor="#000"
                    keyboardType={"numeric"}
                  />
                </View>
              </View>
            </View>
          </View>
        ) : null}
        <TouchableOpacity
          style={styles._payment_method_main}
          onPress={CashOnDelivery}
        >
          <View style={styles._payment_method_title_main}>
            <Cash width={28} height={23} fill={"#000"} />
            {selectedPaymentMethod === 3 ? (
              <Text style={styles._payment_method_title_selected}>
                Cash on delivery
              </Text>
            ) : (
              <Text style={styles._payment_method_title}>Cash on delivery</Text>
            )}
          </View>
          {selectedPaymentMethod === 3 ? (
            <View style={styles._payment_method_selected}>
              <View style={styles._payment_method_selected_bg} />
            </View>
          ) : (
            <View style={styles._payment_method_selected}>
              <View style={styles._payment_method_withoutselected_bg} />
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles._next_btn} onPress={()=> props.navigation.navigate("UserLocation")}>
          <Text style={styles._next_btn_text}>Pay and Proceed</Text>
        </TouchableOpacity>
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
    </View>
  );
}
export default BookingPayment;
