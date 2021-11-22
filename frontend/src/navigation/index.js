import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './../screens/auth/signup';
import Login from '../screens/auth/login';
import Otp from '../screens/auth/otp';
import SelectLocation from '../screens/selectlocation';
import Home from '../screens/home';
const Stack = createNativeStackNavigator();
function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SelectLocation" component={SelectLocation} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;