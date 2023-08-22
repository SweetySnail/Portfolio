import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { Fontisto } from "@expo/vector-icons";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from "./pages/Home.js";
import { Weather } from "./pages/Weather.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Weather" component={Weather} />
      <Tab.Screen name="Blog" component={Weather} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

// const { width: SCREEN_WIDTH } = Dimensions.get("window");
// const API_KEY = "2ea1836dd69d5368398b257e49c30875";
// const icons = {
//   Clouds: "cloudy",
//   Clear: "day-sunny",
//   Rain: "rains",
//   Atmosphere: "cloudy-gusts",
//   Snow: "snow",
//   Drizzle: "rain",
//   Thunderstorm: "lightning",
// }

// export default function App() {
//   const [city, setCity] = useState("Loading...");
//   const [days, setDays] = useState([]);
//   const [ok, setOk] = useState(true);
//   const getWeather = async () => {
//     const { granted } = await Location.requestForegroundPermissionsAsync();
//     if (!granted) {
//       setOk(false);
//     }
//     const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 });
//     const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
//     setCity(location[0].city);
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
//     const json = await response.json();
//     setDays(json.daily);
//   };

//   useEffect(() => {
//     getWeather();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.city}>
//         <Text style={styles.cityName}>{city}</Text>
//       </View>
//       <ScrollView
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         horizontal
//         contentContainerStyle={styles.weather}
//       >
//         {days.length === 0 ? (
//           <View style={{...styles.day, alignItems: "center"}}>
//             <ActivityIndicator
//               color="white"
//               style={{ marginTop: 10 }}
//               size="large"
//             />
//           </View>
//         ) : (
//           days.map((day, index) => (
//             <View key={index} style={styles.day}>
//               <View style={{flexDirection: "row", alignItems:"center", justifyContent: "space-between", width: "100%"}}>
//                 <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
//                 <Fontisto name={icons[day.weather[0].main]} size={68} />
//               </View>
//               <Text style={styles.description}>{day.weather[0].main}</Text>
//               <Text style={styles.tinyText}>{day.weather[0].description}</Text>
//             </View>
//           ))
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "skyblue"
//   },
//   city: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   cityName: {
//     fontSize: 48,
//     fontWeight: "500",
//   },
//   weather: {

//   },
//   day: {
//     width: SCREEN_WIDTH,
//     alignItems: "flex-start",
//     paddingHorizontal: 20,
//   },
//   temp: {
//     marginTop: 50,
//     fontWeight: "600",
//     fontSize: 100,
//   },
//   description: {
//     marginTop: -10,
//     fontSize: 30,
//     fontWeight: "500",
//   },
//   tinyText: {
//     marginTop: -5,
//     fontSize: 25,
//     fontWeight: "500",
//   },
// })