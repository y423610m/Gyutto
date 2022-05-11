import { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Works = ({ item }) => {
  return (
    <View
      style={{
        width: 120,
        borderColor: "gray",
        borderWidth: 1,
        marginLeft: 5,
        marginTop: 5,
      }}
    >
      <Text style={{ fontSize: 10 }}>{item.UpdatedDate}</Text>
      <Text>{item.ShopName}</Text>
      <Text numberOfLines={1}>
        #{item.tags[0]} #{item.tags[1]}
      </Text>
      <Image
        source={{
          uri: item.uri,
        }}
        style={{ width: "100%", height: 100 }}
      />
    </View>
  );
};

const DATA = [
  {
    UpdatedDate: "2021.12.31",
    ShopName: "KiKi",
    uri: "https://marryjushop.com/wp-content/uploads/2020/03/fe2f191ba725e117370da84fc8c38401.png",
    tags: ["イヤリング", "ネックレス"],
  },
  {
    UpdatedDate: "hhhh.mm.dd1",
    ShopName: "ショップ名1",
    uri: "https://marryjushop.com/wp-content/uploads/2020/03/fe2f191ba725e117370da84fc8c38401.png",
    tags: ["タグ１", "タグ２"],
  },
  {
    UpdatedDate: "hhhh.mm.dd2",
    ShopName: "ショップ名2",
    uri: "https://marryjushop.com/wp-content/uploads/2020/03/fe2f191ba725e117370da84fc8c38401.png",
    tags: ["タグ１", "タグ２"],
  },
  {
    UpdatedDate: "hhhh.mm.dd3",
    ShopName: "Shoショップ名3",
    uri: "https://marryjushop.com/wp-content/uploads/2020/03/fe2f191ba725e117370da84fc8c38401.png",
    tags: ["タグ１", "タグ２"],
  },
];

class NewWorks extends Component {
  renderItem({ item }) {
    return <Works item={item} />;
  }

  render() {
    return (
      <View style={{ paddingTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>フォロー作家さんの新着作品</Text>
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
          //keyExtractor={(item) => item}
          keyExtractor={(item) => item.ShopName}
          horizontal={true}
        ></FlatList>
      </View>
    );
  }
}

export { NewWorks };
