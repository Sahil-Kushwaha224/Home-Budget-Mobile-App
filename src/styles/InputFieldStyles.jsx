import { StyleSheet } from "react-native";

const baseInput = {
  height: 50,
  marginTop: 10,
  paddingHorizontal: 15,
  borderRadius: 8,
  marginBottom: 20,
  fontFamily: "Roboto", // Example of custom font family, adjust as needed
};

const InputFieldStyles = StyleSheet.create({
  textInputOnBlur: {
    ...baseInput,
    backgroundColor: "#AC8968", // Light gray background color
    borderWidth: 1,
    borderColor: "#3E362E", // Light gray border color
    color: "#333", // Text color
  },
  textInputOnFocus: {
    ...baseInput,
    backgroundColor: "#f0e6d7", // White background color on focus
    borderWidth: 2,
    borderColor: "#323232", // Hot pink border color on focus
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Add elevation for Android shadow
  },
});

export default InputFieldStyles;
