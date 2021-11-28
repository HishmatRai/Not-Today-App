import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './../screens/auth/signup';
import Login from '../screens/auth/login';
import Otp from '../screens/auth/otp';
import SelectLocation from '../screens/selectlocation';
import Home from '../screens/home';
import HomeCleaning from '../screens/homeceaning';
import HomeDeepClean from '../screens/homeDeepClean';
import homeDeepCleanQuantity from '../screens/homeDeepCleanQuantity';
import YourLocation from '../screens/YourLocation';
import DeliveryAddress from '../screens/DeliveryAddress';
import Checkout from '../screens/Checkout';
import SearchCategory from '../screens/SearchCategory';
import Message from '../screens/Message';
import BookingPayment from '../screens/BookingPayment';
import UserLocation from '../screens/UserLocation';
import Rating from '../screens/Rating';
import Profile from '../screens/Profile';
import Select from '../screens/Select';
import PhoneNumber from '../screens/PhoneNumber';
import DateTime from '../screens/DateTime';
const Stack = createNativeStackNavigator();
function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Select" component={Select} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ headerShown: false }} />
        <Stack.Screen name="DateTime" component={DateTime} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="HomeCleaning" component={HomeCleaning} options={{ headerShown: false }} />
        <Stack.Screen name="HomeDeepClean" component={HomeDeepClean} options={{ headerShown: false }} />
        <Stack.Screen name="homeDeepCleanQuantity" component={homeDeepCleanQuantity} options={{ headerShown: false }} />
        <Stack.Screen name="YourLocation" component={YourLocation} options={{ headerShown: false }} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
        <Stack.Screen name="SearchCategory" component={SearchCategory} options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
        <Stack.Screen name="BookingPayment" component={BookingPayment} options={{ headerShown: false }} />
        <Stack.Screen name="UserLocation" component={UserLocation} options={{ headerShown: false }} />
        <Stack.Screen name="Rating" component={Rating} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;