import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import ToggleSwitch from "toggle-switch-react-native";
function About() {
  const [toggle, setToggle] = React.useState(false);
  const [toggle2, setToggle2] = React.useState(false);
  return (
    <View>
      <ScrollView>
        <View style={styles._data_main}>
          <Text style={styles._title}>Full Name</Text>
          <Text style={styles._name}>Johan Smithy</Text>
        </View>
        <View style={styles._data_main}>
          <Text style={styles._title}>Phone-address:</Text>
          <Text style={styles._name}>+91 81231 12345</Text>
        </View>
        <View style={styles._data_main}>
          <Text style={styles._title}>Location</Text>
          <Text style={styles._name}>USA</Text>
        </View>
        <View style={styles._line} />
        <View style={styles._toggle_main}>
          <Text style={styles._toggle_heading}>Notifications</Text>
          <ToggleSwitch
            isOn={toggle}
            onColor="#1EA3C8"
            offColor="#D6DCE6"
            labelStyle={{
              color: "black",
              fontWeight: "900",
              backgroundColor: "#4788ED",
            }}
            style={
              {
                // borderWidth: 2,
                // borderColor: "black",
                // borderRadius: 30,
              }
            }
            thumbOffStyle={{
              backgroundColor: "#fff",
            }}
            thumbOnStyle={{
              backgroundColor: "#fff",
            }}
            size="medium"
            onToggle={(isOn) => setToggle(!toggle)}
          />
        </View>
        <View style={styles._toggle_main}>
          <Text style={styles._toggle_heading}>Receive Emails</Text>
          <ToggleSwitch
            isOn={toggle2}
            onColor="#1EA3C8"
            offColor="#D6DCE6"
            labelStyle={{
              color: "black",
              fontWeight: "900",
              backgroundColor: "#4788ED",
            }}
            style={
              {
                // borderWidth: 2,
                // borderColor: "black",
                // borderRadius: 30,
              }
            }
            thumbOffStyle={{
              backgroundColor: "#fff",
            }}
            thumbOnStyle={{
              backgroundColor: "#fff",
            }}
            size="medium"
            onToggle={(isOn) => setToggle2(!toggle2)}
          />
        </View>
        <View style={styles._line2} />
        <View style={styles._data_main2}>
          <TouchableOpacity>
            <Text style={styles._name}>Change Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._data_main2}>
          <TouchableOpacity>
            <Text style={styles._name}>Feedback</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._data_main2}>
          <TouchableOpacity>
            <Text style={styles._name}>Contact Us</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 20 }} />
      </ScrollView>
    </View>
  );
}
export default About;
