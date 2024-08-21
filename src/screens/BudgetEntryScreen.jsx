import React, { useState } from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import ButtonStyles from "../styles/ButtonStyles";
import ContainerStyles from "../styles/ContainerStyles";
import InputField from "../components/InputField";
import TypographyStyles from "../styles/TypographyStyles";
import { insertData } from "../utils/Database";

const BudgetEntryScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    plannedAmount: "",
    actualAmount: ""
  });

  const handleChange = (value, field) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", plannedAmount: "", actualAmount: "" });
  };

  const handleFormSubmit = () => {
    const { name, plannedAmount, actualAmount } = formData;
  
    // Validation checks
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      Alert.alert("Validation Error", "Name must contain only alphabets and spaces");
      return;
    }
  
    if (!name.trim()) {
      Alert.alert("Validation Error", "Name cannot be empty");
      return;
    }
  
    if (!/^\d+(\.\d+)?$/.test(plannedAmount.trim())) {
      Alert.alert("Validation Error", "Planned amount must be a valid number");
      return;
    }
  
    if (!/^\d+(\.\d+)?$/.test(actualAmount.trim())) {
      Alert.alert("Validation Error", "Actual amount must be a valid number");
      return;
    }
  
    insertData(name, parseFloat(plannedAmount), parseFloat(actualAmount))
      .then(() => {
        Alert.alert("Success", "Data inserted successfully", [
          {
            text: "OK",
            onPress: () => {
              resetForm();
              navigation.navigate("BudgetListing");
            }
          }
        ]);
      })
      .catch(err => {
        console.error("Failed to insert data:", err);
        Alert.alert("Error", "Failed to save data");
      });
  };
  

  return (
    <View style={ContainerStyles.sectionContainer}>
      <Text style={TypographyStyles.headingText}>
        Enter the Required Details
      </Text>
      <InputField
        title="Name"
        keyboardType="default"
        value={formData.name}
        onChange={(value) => handleChange(value, "name")}
      />
      <InputField
        title="Planned Amount ($)"
        keyboardType="numeric"
        value={formData.plannedAmount}
        onChange={(value) => handleChange(value, "plannedAmount")}
      />
      <InputField
        title="Actual Amount ($)"
        keyboardType="numeric"
        value={formData.actualAmount}
        onChange={(value) => handleChange(value, "actualAmount")}
      />
      <TouchableOpacity
        style={[
          ButtonStyles.primaryButton,
          { opacity: formData.name && formData.plannedAmount && formData.actualAmount ? 1 : 0.5 },
        ]}
        onPress={handleFormSubmit}
        disabled={!formData.name || !formData.plannedAmount || !formData.actualAmount}
      >
        <Text style={TypographyStyles.primaryButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BudgetEntryScreen;
