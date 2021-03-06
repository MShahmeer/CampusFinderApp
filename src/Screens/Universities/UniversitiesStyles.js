import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
    width: "85%",
    marginLeft: "15%",
  },
  filterWrapper: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingTop: 20,
  },
  singleFilter: {
    flex: 0.3,
    flexDirection: "row",
    height: 40,
    // width:80,
    marginLeft: 10,
  },
  filter: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  universityName: {
    color: "#ffffff",
    backgroundColor: "#F75656",
    padding: 5,
    borderTopLeftRadius: 10,
  },
  deadlineText: {
    color: "#ff0000",
    fontWeight: "300",
    fontSize: 19,
  },

  universitiesWrapper: {
    flex: 0.9,
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  singleUniversity: {
    flex: 0.25,
    height: "100%",
    width: "100%",
    borderWidth: 0.1,
    marginVertical: 5,
  },
  rankingTextWrapper: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    width: "100%",
  },
  rankingText: {
    marginRight: 20,
    color: "green",
    fontWeight: "800",
    fontSize: 16,
  },
  imageWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
  universityDetailWrapper: {
    flex: 0.7,
    height: "100%",
    width: "100%",
  },
  universityDetailText: {
    fontSize: 17,
    marginLeft: 15,
    fontWeight: "500",
    marginBottom: 5,
    marginTop: 5,
  },
  locAndPhoneWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phone: {
    fontSize: 17,
    marginRight: 15,
    fontWeight: "500",
    marginTop: 12,
  },
});

export default styles;
