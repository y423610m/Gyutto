import { StyleSheet, Text, View } from "react-native";

function FavoriteScreen() {
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

export default FavoriteScreen;
