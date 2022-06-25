import { Text, View, SafeAreaView, Image } from "react-native";
import styles from "../IntroStyles";

const IntroScreen3 = () => {
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
          style={styles.introImageThird}
          source={require("../../../../assets/images/introo3.png")}
        />
      </View>

      <View style={styles.textIntroWrapper}>
        <Text style={styles.introText}>FIND DETAIL ABOUT</Text>
        <Text style={styles.detailTextSecond}>ADMISSION</Text>
        <Text style={styles.detailText}> IN </Text>
        <Text style={styles.detailTextSecond}>PAKISTAN</Text>
      </View>

      <View style={styles.navigationIntroWrapper}>
        <View style={[styles.navCircle, styles.navCircleMargin]}></View>
        <View style={[styles.navCircle, styles.navCircleMargin]}></View>
        <View style={styles.navCircleBorderBorder}>
          <View style={[styles.navCircle, styles.navCircleBackGround]}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen3;
