/** Import React-Native */
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/** Import Other Files */
import HomeScreen from "./screen/Home";
import WeatherScreen from "./screen/Weather";
import BlogScreen from "./screen/Blog";

export type BottomTabScreenList = {
  Home: undefined,
  Weather: undefined,
  Blog: undefined,
}

const Tab = createBottomTabNavigator<BottomTabScreenList>();

export default function App() {
  return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Weather" component={WeatherScreen} />
      <Tab.Screen name="Blog" component={BlogScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}