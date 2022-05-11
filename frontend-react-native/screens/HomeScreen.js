import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CampaignSlider from "../components/CampaignSlider";
import { CreatorRecommendList } from "../components/Creator";
import { NewWorks } from "../components/Works";
import { FlatList } from "react-native-gesture-handler";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View flex={1} backgroundColor={"#FFFFFF"}>
      <ScrollView>
        <CampaignSlider />
        <CreatorRecommendList />
        <NewWorks />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;

//<View style={styles.circleGradient}>
//<Text style={styles.visit}>Login</Text>
