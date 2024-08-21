import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import HomePage from './src/components/HomePage';
import BudgetEntryScreen from './src/screens/BudgetEntryScreen';
import BudgetEntryListingScreen from './src/screens/BudgetEntryListingScreen';
import { initDatabase } from './src/utils/Database';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#c3b9b7",
          },
          headerTintColor: "#47294c",
        }}>
          <Stack.Screen name="Home" component={HomePage} options={{ title: "HOME BUDGET APP" }} />
          <Stack.Screen name="BudgetEntry" component={BudgetEntryScreen} options={{ title: "BUDGET ENTRY" }} />
          <Stack.Screen name="BudgetListing" component={BudgetEntryListingScreen} options={{ title: "BUDGET LISTING" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
