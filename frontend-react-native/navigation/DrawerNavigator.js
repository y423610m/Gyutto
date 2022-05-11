import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import BottomTabNavigator from "./BottomTabNavigator";
import InformationScreen from "../screens/InformationScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      drawerType="front"
      drawerStyle={{
        backgroundColor: "gray",
      }}
      screenOptions={{
        activeTintColor: "tomato",
        activeBackgroundColor: "black",
        inactiveTintColor: "white",
        itemStyle: { marginVertical: 10 },
        labelStyle: { fontSize: 18 },
      }}
    >
      <Drawer.Screen
        name="HomeTab"
        component={BottomTabNavigator}
        options={{
          drawerLabel: "HomeTab",
          drawerIcon: ({ color }) => (
            <Ionicons
              name="ios-home"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
          headerTitle: () => <Text>hello</Text>,
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Information"
        component={InformationScreen}
        options={{
          drawerLabel: "Information",
          drawerIcon: ({ color }) => (
            <Ionicons
              name="ios-information"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
          /// headerShown: false,
        }}
      />

      <Drawer.Screen
        name="message"
        component={InformationScreen}
        options={{
          drawerLabel: "message",
          drawerIcon: ({ color }) => (
            <Ionicons
              name="ios-mail"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
          /// headerShown: false,
        }}
      />

      <Drawer.Screen
        name="purchased"
        component={InformationScreen}
        options={{
          drawerLabel: "purchased",
          drawerIcon: ({ color }) => (
            <Ionicons
              name="ios-gift"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
          /// headerShown: false,
        }}
      />

      <Drawer.Screen
        name="follow"
        component={InformationScreen}
        options={{
          drawerLabel: "follow",
          drawerIcon: ({ color }) => (
            <Ionicons
              name="ios-person-add"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
          /// headerShown: false,
        }}
      />

      <Drawer.Screen
        name="help"
        component={InformationScreen}
        options={{
          drawerLabel: "help",
          drawerIcon: ({ color }) => (
            <Ionicons
              name="ios-help"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
          /// headerShown: false,
        }}
      />

      <Drawer.Screen
        name="login"
        component={InformationScreen}
        options={{
          drawerLabel: "login",
          drawerIcon: ({ color }) => (
            <Ionicons
              name="ios-person"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
          /// headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    padding: 2,
  },
});
