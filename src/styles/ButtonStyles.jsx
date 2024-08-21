import { StyleSheet } from "react-native";

const baseButton = {
  padding: 15,
  borderRadius: 25,
  alignItems: "center",
  marginVertical: 10,
};

const ButtonStyles = StyleSheet.create({
  primaryButton: {
    ...baseButton,
    backgroundColor: "#5f43b2", // Hot pink color
  },
  secondaryButton: {
    ...baseButton,
    backgroundColor: "blue", // White color for secondary button
    borderWidth: 1,
    borderColor: "green", // Border color matches primary button
  },
  dangerButton: {
    ...baseButton,
    backgroundColor: "#330000", // Deep pink color for danger button
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginHorizontal: 10,
    minWidth: 120, // Ensures that all buttons have at least the minimum width
    justifyContent: "center", // Centers the text vertically
    alignItems: "center",
     backgroundColor: "#eff3fc", marginTop: 20  // Centers the text horizontally
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#80669d', // Optional: background color for the whole screen
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20, // Ensures spacing on the sides
  },

  buttonText: {
    color: '#6d2480', // Text color
    fontSize: 18, // Text size
    fontWeight: 'bold' // Text boldness
  },
});

export default ButtonStyles;
