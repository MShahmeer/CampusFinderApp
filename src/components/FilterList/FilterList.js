import { List, TextInput, Text, Button } from "react-native-paper";
import { useState } from "react";
import { View, ScrollView } from "react-native";

const FilterList = () => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  return (
    <ScrollView>
      <List.Section title="Find the best match" style={{ flex: 0.5 }}>
        <List.Accordion
          title="Select Study Level"
          left={(props) => <List.Icon {...props} icon="code-brackets" />}
        >
          <List.Item title="BS" />
          <List.Item title="MS" />
        </List.Accordion>
        <List.Accordion
          title="Program Name"
          left={(props) => <List.Icon {...props} icon="abugida-thai" />}
        >
          <List.Item title="BS Software Engineering" />
          <List.Item title="BS Chemical Engineering" />
          <List.Item title="BS Computer Science" />
          <List.Item title="BS Electrical Engineering" />
        </List.Accordion>
        <List.Accordion
          title="City"
          left={(props) => <List.Icon {...props} icon="map-marker" />}
        >
          <List.Item title="Lahore" />
          <List.Item title="Karachi" />
          <List.Item title="Peshawar" />
          <List.Item title="Islamabad" />
        </List.Accordion>
        <List.Accordion
          title="Select Ranking"
          left={(props) => <List.Icon {...props} icon="chevron-triple-up" />}
        >
          <List.Item title="Top 10" />
          <List.Item title="Top 20" />
          <List.Item title="Top 50" />
          <List.Item title="Top 100" />
        </List.Accordion>
        <List.Accordion
          title="Type"
          left={(props) => <List.Icon {...props} icon="shape" />}
        >
          <List.Item title="Government" />
          <List.Item title="Private" />
        </List.Accordion>
        <List.Accordion
          title="Status"
          left={(props) => <List.Icon {...props} icon="list-status" />}
        >
          <List.Item title="Admission Open" />
          <List.Item title="Admission Closed" />
        </List.Accordion>

        <View>
          <Text style={{ fontSize: 20, marginTop: 10 }}>Enter Tution Fee</Text>
          <TextInput
            style={{ margin: 50, marginBottom: 10, marginTop: 10 }}
            label="Min"
            value={minValue}
            onChangeText={(text) => setMinValue(text)}
          />
          <TextInput
            style={{
              marginBottom: 10,
              marginRight: 50,
              marginLeft: 50,
            }}
            label="Max"
            value={maxValue}
            onChangeText={(text) => setMaxValue(text)}
          />
          <Button
            style={{
              marginRight: 50,
              marginLeft: 50,
              borderRadius: 20,
            }}
            icon="check-outline"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Apply Filter
          </Button>
        </View>
      </List.Section>
    </ScrollView>
  );
};

export default FilterList;
