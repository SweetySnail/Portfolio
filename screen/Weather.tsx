import React from "react";
import { View, Text } from "react-native";
import {BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabScreenList } from "../App";

type Weatherprops = BottomTabScreenProps<BottomTabScreenList, "Weather">

export default function WeatherScreen(props: Weatherprops) {
    return(
      <View>
      <Text>Hello Weather!</Text>
    </View>
    )
}