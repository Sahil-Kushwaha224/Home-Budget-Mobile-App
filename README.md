#Home Budget Mobile App 

## Overview
The Home Budget Manager app allows users to enter and track their monthly planned and actual expenditures for various items. Users can input budget details and save them to a memory-based list that persists even after the app is closed. The app provides a simple and clean UI, styled with Material UI, and is built with Redux for state management.

## Features
- **Budget Entry Screen**: Users can input budget details such as the name of the item (e.g., Sports, Education, Grocery) and the planned and actual amounts.
- **Save Budget**: Save the entered budget details to a memory-based list.
- **Budget Entry Listing Screen**: View all saved budget entries in a list format.
- **Data Persistence**: The saved budget data persists even after closing the app.

## Screens

### Budget Entry Screen
- Title: `Budget Entry`
- Input Fields:
  - **Item Name**: (e.g., Sports, Education)
  - **Planned Amount**: (e.g., 1000)
  - **Actual Amount**: (e.g., 200)
- Buttons:
  - **Save Button**: Saves the item to a memory-based list.
  - **Show Items Button**: Navigates to the Budget Entry Listing Screen.

### Budget Entry Listing Screen
- Title: `Budget Entry Listing`
- List of all saved budget entries with item name, planned amount, and actual amount.

## Technical Requirements
- **Redux**: Used for state management to store the budget data.
- **Material UI**: Used for consistent and modern styling.
- **Persistent Data**: Data is saved even after the app is closed.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/home-budget-manager.git
