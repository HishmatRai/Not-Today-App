import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function BgColorButton(props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: props.bgColor },
        { marginTop: props.marginTop },
      ]}
      onPress={props.path}
    >
      <Text style={styles.btn_text}>{props.buttonValue}</Text>
    </TouchableOpacity>
  );
}
