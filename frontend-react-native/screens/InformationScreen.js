import { View, Text, StyleSheet } from "react-native";

export default function InformationScreen() {
  return (
    <View style={styles.container}>
      <Text>Information Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
