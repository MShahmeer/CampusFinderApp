import { Text, View, SafeAreaView, Image } from "react-native";
import styles from "../../Intro/IntroStyles";

import React from "react";

const IntroScreen1 = () => {
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
          source={require("../../../../assets/images/introo1.png")}
        />
      </View>

      <View style={styles.textIntroWrapper}>
        <Text style={styles.introText}>PAKISTAN'S LARGEST</Text>
        <Text style={styles.detailText}> EDUCATIONAL</Text>
        <Text style={styles.detailTextSecond}>DATABASE</Text>
      </View>

      <View style={styles.navigationIntroWrapper}>
        <View style={styles.navCircleBorderBorder}>
          <View style={[styles.navCircle, styles.navCircleBackGround]}></View>
        </View>

        <View style={[styles.navCircle, styles.navCircleMargin]}></View>
        <View style={[styles.navCircle, styles.navCircleMargin]}></View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen1;
