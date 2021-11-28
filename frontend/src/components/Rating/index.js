import React from "react";
import { View } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

function RatingCom() {
  return (
    <View>
      <AirbnbRating
        count={5}
        showRating={false}
        defaultRating={4}
        size={15}
      />
    </View>
  );
}
export default RatingCom;
