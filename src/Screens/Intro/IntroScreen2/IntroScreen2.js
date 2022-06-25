import { Text, View, SafeAreaView, Image } from "react-native";
import styles from "../IntroStyles";

const IntroScreen2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.blobDesign}
        source={require("../../../../assets/images/b1.png")}
      />
      <Image
        style={styles.blobDesigntwo}
        source={require("../../../../assets/images/b2.png")}
      />
      <View style={styles.imageWrapper}>
        <Image
          style={styles.introImage}
          source={require("../../../../assets/images/introo2.png")}
        />
      </View>

      <View style={styles.textIntroWrapper}>
        <Text style={styles.introText}>LOOKING FOR</Text>
        <Text style={styles.detailTextSecond}>UNIVERSITIES</Text>
        <Text style={styles.detailText}> IN YOUR</Text>
        <Text style={styles.detailTextSecond}>CITY</Text>
      </View>

      <View style={styles.navigationIntroWrapper}>
        <View style={[styles.navCircle, styles.navCircleMargin]}></View>
        <View style={styles.navCircleBorderBorder}>
          <View style={[styles.navCircle, styles.navCircleBackGround]}></View>
        </View>
        <View style={[styles.navCircle, styles.navCircleMargin]}></View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen2;
