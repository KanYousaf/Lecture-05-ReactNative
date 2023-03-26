import { StyleSheet } from "react-native";

const styles_main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
  tableContainer: {
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
    alignItems: "flex-start",
  },
  rowContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-start",
  },
  pressableContainer: {
    alignItems: "center",
    backgroundColor: "#Bbeafa",
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
    margin: 5,
  },
  imageContainer: {
    width: 100,
    height: 100,
    margin: 10,
  },
  detailContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 0.5,
    borderColor: "black",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textCharacterTMNT: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textDetailTMNT: {
    margin: 16,
    fontSize: 16,
  },
  imageContainerDetail: {
    width: 380,
    height: 380,
    margin: 10,
  },
});

export { styles_main };
