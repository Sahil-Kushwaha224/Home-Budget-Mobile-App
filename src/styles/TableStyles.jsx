import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const TableStyles = StyleSheet.create({
  table: {
    width: width - 30,
    borderColor: "black", // Light gray border color
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden", // Clip overflow content
    backgroundColor: "#fff", // White background color
  },
  row: {
    flexDirection: "row",
    borderBottomColor: "brown", // Light gray border color
    borderBottomWidth: 1,
    backgroundColor: "#f9f9f9", // Light gray background color
  },
  headerCell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 15,
    fontWeight: "bold",
    color: "#FBEAEB", // Dark gray text color
    backgroundColor: "#2F3C7E", // Light red background color for header cells
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 15,
    color: "#2A3132", // Dark gray text color
    backgroundColor: "#CEE6F2", // Light blue background color for regular cells
  },
});

export default TableStyles;
