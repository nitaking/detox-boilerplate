import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/Home'
import Page1 from './src/Page1'
import Page2 from './src/Page2'
import Page3 from './src/Page3'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Page1: {screen: Page1},
  Page2: {screen: Page2},
  Page3: {screen: Page3},
});

const App = createAppContainer(MainNavigator);

export default App;
