import React from "react";
import { View, Text } from "react-native";

import {BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabScreenList } from "../App";

type Homeprops = BottomTabScreenProps<BottomTabScreenList, "Home">

export default function HomeScreen(props: Homeprops) {
    return(
      <View>
      <Text>Hello Home!</Text>
    </View>
    )
}