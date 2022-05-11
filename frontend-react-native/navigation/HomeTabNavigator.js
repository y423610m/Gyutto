import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InformationScreen from "../screens/InformationScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createMaterialTopTabNavigator();

export default HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="recent" component={InformationScreen} />
      <Tab.Screen name="pickup" component={HomeScreen} />
      <Tab.Screen name="find" component={InformationScreen} />
    </Tab.Navigator>
  );
};
