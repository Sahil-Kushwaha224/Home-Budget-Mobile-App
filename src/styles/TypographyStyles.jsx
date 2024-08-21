import { StyleSheet } from "react-native";

const buttonText = {
  fontSize: 16,
  fontWeight: "bold",
  textTransform: "uppercase",
};

const TypographyStyles = StyleSheet.create({
  regularText: {
    fontSize: 16,
    color: "#333",
  },

  headingText: {
    fontSize: 24, // Increase font size for headings
    color: "#333",
    fontWeight: "bold",
    marginBottom: 15,
  },

  primaryButtonText: {
    ...buttonText,
    color: "#fefdfd",
  },

  secondaryButtonText: {
    ...buttonText,
    color: "#3498db",
  },

  dangerButtonText: {
    ...buttonText,
    color: "#D09683", // Change color to red for danger button text
  },
});

export default TypographyStyles;
