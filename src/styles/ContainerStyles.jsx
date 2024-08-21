import { StyleSheet } from "react-native";

const ContainerStyles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#90AFC5", // Set background color
  },
  buttonContainer: {
    marginVertical: 15,
    alignItems: "center",
  },
  boxContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#f5f5f5", // Set background color
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ContainerStyles;
