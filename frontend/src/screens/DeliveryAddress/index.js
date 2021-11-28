import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Map from "../../components/map";
function DeliveryAddress(props) {
  const [saveAddress, setSaveAddress] = React.useState(false);

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
            <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
              <Ionicons name="chevron-back-sharp" size={15} color="#fff" />
            </TouchableOpacity>
            <Text style={styles._header_heading}>Delivery Address</Text>
          </View>
          <TouchableOpacity style={styles._back_btn} onPress={()=> props.navigation.navigate("SearchCategory")}>
            <EvilIcons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles._title}>Name</Text>
        <View style={styles._name_main}>
          <Text style={styles._name}>Mahmudul Hassan</Text>
        </View>
        <Text style={styles._title}>Contact</Text>
        <View style={styles._name_main}>
          <Text style={styles._name}>+8801618056615</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles._saved_address}>Select from Saved Address</Text>
        </TouchableOpacity>
        <View style={styles._address_main}>
          <Text style={styles._title_address}>Address</Text>

          <View style={styles._save_address_main}>
            <TouchableOpacity style={styles._save_address_check}>
              {saveAddress ? (
                <Ionicons
                  name="checkmark"
                  size={10}
                  color="#707070"
                  onPress={() => setSaveAddress(!saveAddress)}
                />
              ) : (
                <Ionicons
                  name="checkmark"
                  size={10}
                  color="white"
                  onPress={() => setSaveAddress(!saveAddress)}
                />
              )}
            </TouchableOpacity>
            <Text style={styles._title_address}>Save this address</Text>
          </View>
        </View>
        <Text style={styles._address_map}>Address on map</Text>
        <View style={styles._map_main}>
          <Map />
        </View>
        <Text style={styles._title}>Address</Text>
        <View style={styles._name_main}>
          <Text style={styles._name}>
            House: 06, Road: 21, Sector: 10, Uttara, Dhaka
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles._saved_address}>
            I want to take service at other address
          </Text>
        </TouchableOpacity>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
      <TouchableOpacity style={styles._next_btn} onPress={()=> props.navigation.navigate("Checkout")}>
        <Text style={styles._next_btn_text}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
export default DeliveryAddress;
