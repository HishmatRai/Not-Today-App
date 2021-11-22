import React from 'react';
import Navigation from './frontend/src/navigation';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
export default function App(props) {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./frontend/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./frontend/assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigation />
  }
}
