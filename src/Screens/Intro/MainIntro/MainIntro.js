import { Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./MainIntroStyles";
import IntroScreen1 from "../IntroScreen1/IntroScreen1";
import IntroScreen2 from "../IntroScreen2/IntroScreen2";
import IntroScreen3 from "../IntroScreen3/IntroScreen3";

const slides = [
  {
    key: 1,
    screen: <IntroScreen1 />,
  },
  {
    key: 2,
    screen: <IntroScreen2 />,
  },
  {
    key: 3,
    screen: <IntroScreen3 />,
  },
];

const MainIntro = ({ navigation }) => {
  _renderItem = ({ item }) => {
    return <View style={styles.slide}>{item.screen}</View>;
  };

  _onDone = () => {
    navigation.navigate("Home");
  };
  return (
    <AppIntroSlider
      dotStyle={{
        backgroundColor: "lightgrey",
        width: 30,
        marginBottom: 100,
      }}
      activeDotStyle={{
        backgroundColor: "red",
        width: 30,
        marginBottom: 100,
      }}
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      renderDoneButton={() => (
        <View>
          <Text style={[styles.btnStyle, styles.getStartedBtn]}>
            Get Started
          </Text>
        </View>
      )}
      renderNextButton={() => <Text style={styles.btnStyle}>Skip</Text>}
    />
  );
};

export default MainIntro;
