import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { style } from "./HomeStyles";
import CityModal from "../../components/CityModal/CityModal";
import FilterModal from "../../components/FilterModal/FilterModal";

const Home = ({ navigation }) => {
  const [level, setLevel] = useState("Bachelors");
  const [degree, setDegree] = useState("Chemical Engineering");
  const [city, setCity] = useState("Lahore");
  const [show, setShow] = useState(false);
  const [filterModalShow, setFilterModalShow] = useState(false);

  return (
    <ScrollView style={style.container}>
      <View style={style.subcontainer}>
        <View style={style.header}>
          <ImageBackground
            source={require("../../../assets/images/NavbarHome.png")}
            style={style.navbar}
          >
            <Text style={style.heading}>Campus Finder</Text>
            {/* <Pressable onPress={() => setFilterModalShow(false)}> */}
            <Pressable onPress={() => navigation.navigate("FilterModal")}>
              <View
                pointerEvents="none"
                style={{ width: "100%", paddingHorizontal: 90 }}
              >
                <TextInput
                  style={style.searchBar}
                  placeholder="Find Best Match For You"
                  placeholderTextColor="white"
                />
              </View>
            </Pressable>
          </ImageBackground>

          <Text style={{ marginTop: 5 }}>Select field of study</Text>

          <View style={style.picker}>
            <Picker
              selectedValue={level}
              onValueChange={(itemValue, itemIndex) =>
                setLevel({ level: itemValue })
              }
            >
              <Picker.Item label="Masters" value="Masters" />
              <Picker.Item label="Becholars" value="Becholars" />
            </Picker>
          </View>

          <Text style={{ marginTop: 5 }}>
            Tuition Fee (Enter your budget for complete Degree)
          </Text>

          <View style={style.inputFieldWrapper}>
            <TextInput
              style={style.inputStyle}
              placeholder="Min"
              //onChangeText={console.log(data)}
              placeholderTextColor="#c14643"
              textAlign="center"
            />
            <TextInput
              style={style.inputStyle}
              placeholder="Max"
              placeholderTextColor="#c14643"
              textAlign="center"
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("CityModal")}>
            <View style={style.citypicker}>
              <Text style={{ color: "#c14643" }}>Select City</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[style.searchBtn]}
            onPress={() => navigation.navigate("Universities")}
            // onPress={() => navigation.navigate("/")}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Apply
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.recommendation}>
          <Text style={style.recommendationHeading}>Recommendations</Text>

          <View style={style.recommendationContainer}>
            <View>
              <Image
                style={style.campusImg}
                source={require("../../../assets/images/COMSATS.jpeg")}
              />
              <View>
                <Text>Name:Comsats</Text>
                <Text>Admissions:Open</Text>
                <Text>Location:Lahore</Text>
              </View>
            </View>

            <View>
              <Image
                style={style.campusImg}
                source={require("../../../assets/images/COMSATS.jpeg")}
              />
              <View>
                <Text>Name:Comsats</Text>
                <Text>Admissions:Open</Text>
                <Text>Location:Lahore</Text>
              </View>
            </View>
          </View>
        </View>

        <CityModal show={show} />
      </View>
    </ScrollView>
  );
};

export default Home;
