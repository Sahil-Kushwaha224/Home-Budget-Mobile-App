# Home Budget Mobile App 

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

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

bash
# using npm
npm start

# OR using Yarn
yarn start


## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

bash
# using npm
npm run android

# OR using Yarn
yarn android


### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
