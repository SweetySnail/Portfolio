import React from "react";
import { View, Text } from "react-native";
import {BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabScreenList } from "../App";

type Blogprops = BottomTabScreenProps<BottomTabScreenList, "Blog">

export default function BlogScreen(props: Blogprops) {
    return(
      <View>
      <Text>Hello Blog!</Text>
    </View>
    )
}