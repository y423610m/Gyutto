import { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

import axios from "axios";

function CreatorFrame({ item }) {
  // axios
  //   .post("https://localhost:8080", {
  //     id: 876,
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   });
  async function f() {
    const res = await axios
      .get("http://192.168.2.110:8080")
      .then(function (response) {
        console.log(response);
      });
    return res;
  }

  console.log(f());

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image source={{ uri: item.FigURI[0] }} style={styles.upper_fig} />
        <Image source={{ uri: item.FigURI[1] }} style={styles.upper_fig} />
        <Image source={{ uri: item.FigURI[2] }} style={styles.upper_fig} />
      </View>
      <View style={styles.lower}>
        <Image source={{ uri: item.IconURI }} style={styles.lower_fig} />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, fontStyle: "italic" }}>
            {item.ShopName}
          </Text>
          <Text style={{ fontSize: 15, fontStyle: "normal" }}>
            {item.OwnerName}
          </Text>
          <View flexDirection="row">
            <Ionicons
              name="ios-location"
              size={15}
              color="black"
              style={{ paddingRight: 3 }}
            />
            <Text style={{ fontSize: 15 }}>{item.Regeon}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    paddingTop: 5,
    borderColor: "gray",
    borderWidth: 1,
    paddingBottom: 20,
    marginLeft: 10,
    backgroundColor: "#FFFFFF",
  },
  upper: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  lower: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    paddingTop: 8,
  },
  upper_fig: {
    height: 60,
    width: "30%",
    marginHorizontal: "1%",
  },
  lower_fig: {
    height: 50,
    width: 50,
  },
});

const DATA = [
  {
    ShopName: "KiKi",
    OwnerName: "作家名",
    Regeon: "福岡",
    IconURI: "http://freeiconbox.com/icon/256/40638.png",
    FigURI: [
      "https://marryjushop.com/wp-content/uploads/2020/03/bfbcb43fc66d401e9e91d7081e480974.png",
      "https://marryjushop.com/wp-content/uploads/2020/03/105a74d8a705f43d9ef4a72a5b7a5aca.png",
      "https://i.pinimg.com/originals/3e/fb/b1/3efbb1070c4a20b6979b20c197729732.png",
    ],
  },
  {
    ShopName: "ショップ名1",
    OwnerName: "作家名1",
    Regeon: "地域1",
    IconURI: "http://freeiconbox.com/icon/256/40638.png",
    FigURI: [
      "https://marryjushop.com/wp-content/uploads/2020/03/bfbcb43fc66d401e9e91d7081e480974.png",
      "https://marryjushop.com/wp-content/uploads/2020/03/105a74d8a705f43d9ef4a72a5b7a5aca.png",
      "https://i.pinimg.com/originals/3e/fb/b1/3efbb1070c4a20b6979b20c197729732.png",
    ],
  },
  {
    ShopName: "ショップ名2",
    OwnerName: "作家名2",
    Regeon: "地域2",
    IconURI: "http://freeiconbox.com/icon/256/40638.png",
    FigURI: [
      "https://marryjushop.com/wp-content/uploads/2020/03/bfbcb43fc66d401e9e91d7081e480974.png",
      "https://marryjushop.com/wp-content/uploads/2020/03/105a74d8a705f43d9ef4a72a5b7a5aca.png",
      "https://i.pinimg.com/originals/3e/fb/b1/3efbb1070c4a20b6979b20c197729732.png",
    ],
  },
  {
    ShopName: "ショップ名3",
    OwnerName: "作家名3",
    Regeon: "地域3",
    IconURI: "http://freeiconbox.com/icon/256/40638.png",
    FigURI: [
      "https://marryjushop.com/wp-content/uploads/2020/03/bfbcb43fc66d401e9e91d7081e480974.png",
      "https://marryjushop.com/wp-content/uploads/2020/03/105a74d8a705f43d9ef4a72a5b7a5aca.png",
      "https://i.pinimg.com/originals/3e/fb/b1/3efbb1070c4a20b6979b20c197729732.png",
    ],
  },
];

class CreatorRecommendList extends Component {
  renderItem({ item }) {
    return <CreatorFrame item={item} />;
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <View flexDirection={"row"}>
          <Text style={{ fontSize: 20 }}>あなたへのオススメ作家さん</Text>
          <TouchableOpacity
            onPress={() => {
              alert("myao~ nyanko dazo~");
            }}
          >
            <Text style={{ fontSize: 15, paddingLeft: 30, paddingTop: 3 }}>
              もっとみる＞
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.ShopName}
          horizontal={true}
          //removeClippedSubviews={false}
        >
          {/* <CreatorFrame />
          <CreatorFrame /> */}
        </FlatList>
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {},
});

export { CreatorRecommendList };
