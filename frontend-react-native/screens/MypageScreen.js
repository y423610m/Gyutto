import { StyleSheet, Text, View } from "react-native";

function MyPage() {
  return (
    <View style={styles.container}>
      <Text>MaPage Screen</Text>
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

export default MyPage;
