import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import bikeScreen from "./src/screens/bikeScreen"
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Bike:bikeScreen
  },
  {
    initialRouteName: 'Bike',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
