import { View } from "react-native";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
  console.log("run start");
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
