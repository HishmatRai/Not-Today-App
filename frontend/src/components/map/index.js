import * as React from "react";
import MapView from "react-native-maps";
import { View } from "react-native";
import styles from ".//styles";
export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles._map_show}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
