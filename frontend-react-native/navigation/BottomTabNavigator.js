import React from "react";
import { Image, Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import InformationScreen from "../screens/InformationScreen";
import MyPage from "../screens/MypageScreen";
// import { addValidStylePropTypes } from "react-native/Libraries/StyleSheet/StyleSheetValidation";
//import { ViewPropTypes } from "deprecated-react-native-prop-types";

const Tab = createBottomTabNavigator();
const img = require("../assets/icon.png");
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ホーム") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "チャット") {
            iconName = "ios-chatbubbles-sharp";
            //iconName = focused ? "ios-search" : "ios-search";
            tmp = "search";
          } else if (route.name === "お知らせ") {
            iconName = "ios-notifications";
            //iconName = focused ? "ios-star" : "ios-star-outline";
          } else if (route.name === "マイページ") {
            //iconName = focused ? "ios-cart-sharp" : "ios-cart-outline";
            iconName = "ios-person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#F19191",
        tabBarInactiveTintColor: "gray",
        headerTitle: () => {
          return <Image source={img} style={{ height: 50, width: 50 }} />;
        },
        headerLeft: () => {
          return (
            <Ionicons
              name="ios-list-outline"
              size={30}
              color="black"
              onPress={() => {
                alert("kono bottun ha osenai nya~");
                //navigation.toggleDrawer();
              }}
              style={{ paddingLeft: 10 }}
            />
          );
        },
        headerRight: () => {
          return (
            <Ionicons
              name="ios-search"
              size={30}
              color="black"
              onPress={() => {
                alert("madanya~ matemate");
                //navigation.toggleDrawer();
              }}
              style={{ paddingRight: 10 }}
            />
          );
        },

        //headerShown: false,
        // onPress={() => navigation.navigate("詳細ページ", { article: item })}
      })}
    >
      <Tab.Screen name="ホーム" component={HomeScreen} />
      <Tab.Screen name="チャット" component={ChatScreen} />
      <Tab.Screen name="お知らせ" component={InformationScreen} />
      <Tab.Screen name="マイページ" component={MyPage} />
    </Tab.Navigator>
  );
}
