import React from "react";
import styles from "./styles";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "./../../../../assets/imagse/Logo.svg";
function Login(props) {
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="#fff"
        translucent={false}
      />
      <ImageBackground
        source={require("./../../../../assets/imagse/login.png")}
        style={styles._image}
      >
        <TouchableOpacity
          style={styles._header_main}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={16} color="#fff" />
          <Text style={styles._header_heading}>Sign In</Text>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <View style={styles._logo_main}>
              <Logo width={"100%"} height={"100%"} fill={"#000"} />
            </View>
            <Text style={styles._heading}>Welcome Back!</Text>

            <View style={styles._input_main}>
              <TextInput
                placeholder="Phone number / Email"
                value={mobileNumber}
                onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
                style={styles._input}
                underlineColor="#193628"
                placeholderTextColor="#193628"
                autoFocus={true}
              />
            </View>
            <View style={styles._input_main}>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                style={styles._input}
                underlineColor="#193628"
                placeholderTextColor="#193628"
                autoFocus={true}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles._forgot_password}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate("Home")}>
              <Text style={styles.btn_text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles._service_provider} onPress={()=> props.navigation.navigate("Home")}>
              <Text style={styles._service_provider_text}>
                Login as Sercvice provider
              </Text>
            </TouchableOpacity>
            <View style={styles._signup_main}>
              <Text style={styles._account}>Need an account?</Text>
              <TouchableOpacity onPress={()=> props.navigation.navigate("Signup")}>
                <Text style={styles._signup}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default Login;
