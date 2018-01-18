import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/Screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: "One",
//       screen: "example.FirstTabScreen", // this is a registered name for a screen
//       icon: require("./src/Image/icon1.png"),
//       //   selectedIcon: require("../img/one_selected.png"), // iOS only
//       title: "Screen One"
//     },
//     {
//       label: "Two",
//       screen: "example.SecondTabScreen",
//       icon: require("./src/Image/icon1.png"),
//       //   selectedIcon: require("../img/two_selected.png"), // iOS only
//       title: "Screen Two"
//     }
//   ]
// });

Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.FirstTabScreen', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    topTabs: [
      {
        screenId: 'example.SecondTabScreen',
        title: 'tab one'
      },
      {
        screenId: 'example.PushedScreen',
        title: 'tab two'
      }
    ],
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  drawer: {
    left: {
      screen: 'example.Drawer',
      fixedWidth: '90%'
    }
  }
});
