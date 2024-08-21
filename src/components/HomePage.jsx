import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ButtonStyles from "../styles/ButtonStyles";

const HomePage = ({ navigation }) => {
  return (
    <View style={ButtonStyles.container}>
      <View style={ButtonStyles.buttonContainer}>
        <TouchableOpacity
          style={[ButtonStyles.button,{ backgroundColor: "#3498db",}]} 
          onPress={() => navigation.navigate("BudgetEntry")}
        >
          <Text style={ButtonStyles.buttonText}>Enter Budget</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ButtonStyles.button,]}
          onPress={() => navigation.navigate("BudgetListing")}
        >
          <Text style={ButtonStyles.buttonText}>View Budgets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomePage;
