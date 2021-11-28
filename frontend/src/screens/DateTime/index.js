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
import Calendar from "../../components/Calender";
function DateTime(props) {
  const [selectTime, setSelectTime] = React.useState(2);
  let Time = [
    {
      time: "8 - 9 am",
    },
    {
      time: "9 - 10 am",
    },
    {
      time: "10 - 11 am",
    },
    {
      time: "11 - 12 pm",
    },
    {
      time: "12 - 01 pm",
    },
    {
      time: "01 - 02 pm",
    },
    {
      time: "02 - 03 pm",
    },
    {
      time: "13 - 04 pm",
    },
  ];
  let SelectedTime = (i) => {
    setSelectTime(i);
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
            <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
              <Ionicons name="chevron-back-sharp" size={15} color="#fff" />
            </TouchableOpacity>
            <Text style={styles._header_heading}>Home deep clean</Text>
          </View>
          <TouchableOpacity style={styles._back_btn} onPress={()=> props.navigation.navigate("SearchCategory")}>
            <EvilIcons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles._heading}>When would like us to come?</Text>
        <Text style={styles._title}>Date</Text>
        <View style={styles._calender_main}>
          <Calendar />
        </View>
        <Text style={styles._title}>Time</Text>
        <View style={styles._time_main}>
          {Time.map((v, i) => {
            return (
              <TouchableOpacity
                style={
                  selectTime === i
                    ? styles._active_selected_time
                    : styles.__selected_time
                }
                key={i}
                onPress={() => SelectedTime(i)}
              >
                <Text style={styles._active_selected_time_text}>{v.time}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
      <TouchableOpacity style={styles._next_btn} onPress={()=> props.navigation.navigate("DeliveryAddress")}>
        <Text style={styles._next_btn_text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
export default DateTime;
