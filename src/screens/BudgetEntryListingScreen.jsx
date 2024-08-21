import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View, ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, clearItems } from "../store/budgetSlice";
import ButtonStyles from "../styles/ButtonStyles";
import ContainerStyles from "../styles/ContainerStyles";
import TableStyles from "../styles/TableStyles";
import TypographyStyles from "../styles/TypographyStyles";

/**
 * It renders the existing budget entries using Redux for state management.
 * @screen
 */
const BudgetEntryListingScreen = () => {
  const dispatch = useDispatch();
  const budgetList = useSelector((state) => state.budget.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (budgetList.length === 0) {
    return (
      <View style={ContainerStyles.sectionContainer}>
        <Text style={TypographyStyles.headingText}>
        No entries to display        </Text>
      </View>
    );
  }

  return (
    <View style={ContainerStyles.sectionContainer}>
      <View style={TableStyles.table}>
        <View style={TableStyles.row}>
          <Text style={TableStyles.headerCell}>Name</Text>
          <Text style={TableStyles.headerCell}>Planned Amount</Text>
          <Text style={TableStyles.headerCell}>Actual Amount</Text>
        </View>
        <FlatList
          data={budgetList}
          renderItem={({ item, index }) => (
            <View key={index} style={TableStyles.row}>
              <Text style={TableStyles.cell}>{item.name}</Text>
              <Text style={TableStyles.cell}>{item.plannedAmount}</Text>
              <Text style={TableStyles.cell}>{item.actualAmount}</Text>
            </View>
          )}
        />

      </View>
      <TouchableOpacity
        style={ButtonStyles.dangerButton}
        onPress={() =>
          dispatch(clearItems()).then(() => {
            ToastAndroid.show("Data deleted successfully", ToastAndroid.SHORT);
          })
        }
      >
        <Text style={TypographyStyles.dangerButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BudgetEntryListingScreen;
