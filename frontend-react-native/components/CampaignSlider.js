import { SliderBox } from "react-native-image-slider-box";
import { View, Text, StyleSheet } from "react-native";
import { Component } from "react";

export default class CampaignSlider extends Component {
  //export default HomeRecommend = () => {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        require("../assets/matryoshka_text.png"),
        require("../assets/icon.png"),
        "https://cpoint-lab.co.jp/wp-content/uploads/2019/07/cameraimgl9942_tp_v.jpg",
        "https://cpoint-lab.co.jp/wp-content/uploads/2017/12/UNI_MONV15002722_TP_V.jpg",
        "https://cpoint-lab.co.jp/wp-content/uploads/2017/12/iPhone8IMGL8492_TP_V.jpg",
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          paddingVertical={10}
          images={this.state.images}
          height={200}
          width={"85%"}
          dotColor="red"
          inactiveDotColor="gray"
          circleLoop={true}
          resizeMode={"contain"}
          autoplay
          paginationBoxStyle={{
            position: "relative",
            bottom: 10,
            padding: 10,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
