import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import styles from "./UniversitiesStyles";

import { getDatabase, ref, onValue } from "../../../firebase";

import React from "react";

const Universities = () => {
  const [show, setShow] = useState(false);
  const [filters, setFilters] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baa",
      title: "Fee",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72k",
      title: "Admission",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63f",
      title: "Ranking",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d76",
      title: "Location",
    },
  ]);
  const [universities, setUniversities] = useState([
    // {
    //   id: "1",
    //   name: "University of Punjab",
    //   ranking: 3,
    //   fee: 25000,
    //   admission: "Open",
    //   location: "Lahore",
    //   deadline: "22-3-2022",
    // },
    // {
    //   id: "2",
    //   name: "Comsats University",
    //   ranking: 4,
    //   fee: 91000,
    //   admission: "Open",
    //   location: "Islamabad",
    //   deadline: "22-3-2022",
    // },
    // {
    //   id: "3",
    //   name: "GIKI",
    //   ranking: 1,
    //   fee: 600000,
    //   admission: "Close",
    //   location: "Rawalpindi",
    //   deadline: "22-3-2022",
    // },
    // {
    //   id: "4",
    //   name: "NUST",
    //   ranking: 2,
    //   fee: 102000,
    //   admission: "Close",
    //   location: "Risalpur",
    //   deadline: "22-3-2022",
    // },
    // {
    //   id: "5",
    //   name: "Fast",
    //   ranking: 5,
    //   fee: 115000,
    //   admission: "Open",
    //   location: "Korangi",
    //   deadline: "22-3-2022",
    // },
    // {
    //   id: "6",
    //   name: "UET",
    //   ranking: 6,
    //   fee: 50000,
    //   admission: "Open",
    //   location: "Texila",
    //   deadline: "22-9-2022",
    // },
  ]);
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "university_listing/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setUniversities(data);
    });
  }, []);
  const sortListing = (props) => {
    const sortByProperty = (property) => {
      return function (a, b) {
        if (a[property] > b[property]) return 1;
        else if (a[property] < b[property]) return -1;
        return 0;
      };
    };

    setUniversities(
      [...universities].sort(sortByProperty(props.toLowerCase()))
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterWrapper}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={filters}
          renderItem={({ item }) => (
            <View key={item.key} style={styles.singleFilter}>
              <TouchableOpacity
                style={styles.filter}
                onPress={() => sortListing(item.title)}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.universitiesWrapper}>
        <FlatList
          data={universities}
          renderItem={({ item }) => (
            <View key={item.key} style={styles.singleUniversity} elevation={5}>
              <View style={styles.rankingTextWrapper}></View>
              <TouchableOpacity
              //   onPress={() => this.props.navigation.navigate("University")}
              >
                <View style={{ flex: 0.85, flexDirection: "row" }}>
                  <View style={styles.imageWrapper}>
                    <Image
                      style={{
                        height: "75%",
                        width: "100%",
                        borderRadius: 50,
                        marginLeft: 5,
                      }}
                      source={{
                        uri: item.url,
                      }}
                    />
                  </View>
                  <View style={styles.universityDetailWrapper}>
                    <Text
                      style={[
                        styles.universityDetailText,
                        styles.universityName,
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text style={styles.universityDetailText}>
                      Fee : {item.fee}
                    </Text>
                    <Text style={styles.universityDetailText}>
                      Admission : {item.admissions}
                    </Text>
                    <Text style={styles.universityDetailText}>
                      Ranking : {item.ranking}
                    </Text>

                    <View style={styles.locAndPhoneWrapper}>
                      <Text style={styles.universityDetailText}>
                        Location : {item.location}
                      </Text>
                    </View>
                    <Text
                      style={[styles.universityDetailText, styles.deadlineText]}
                    >
                      Deadline : {item.deadline}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Universities;
