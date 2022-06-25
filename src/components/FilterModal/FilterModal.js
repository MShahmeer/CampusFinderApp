import * as React from "react";
import { useState } from "react";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import FilterList from "../FilterList/FilterList";

const FilterModal = ({ isVisible = true, navigation }) => {
  const [visible, setVisible] = useState(isVisible);

  // const showModal = () => setVisible(true);
  // const hideModal = () => setVisible(false);
  const containerStyle = {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 20,
  };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          // onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Button
            icon="arrow-left"
            style={{
              position: "absolute",
              left: 5,
              top: 5,
            }}
            onPress={() => navigation.navigate("Home")}
          ></Button>
          <FilterList></FilterList>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default FilterModal;
