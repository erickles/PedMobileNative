/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
/*
import LotsOfStyles from './Components/LotsOfStyles';
import FixedDimensionsBasics from './Components/FixedDimensionsBasics';
import FlexDimensionsBasics from './Components/FlexDimensionsBasics';
import FlexDirectionBasics from './Components/FlexDirectionBasics';
import JustifyContentBasics from './Components/JustifyContentBasics';
import AlignItemsBasics from './Components/AlignItemsBasics';
import PizzaTranslator from './Components/PizzaTranslator';
import Touchables from './Components/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './Components/IScrolledDownAndWhatHappenedNextShockedMe';
import FlatListBasics from './Components/FlatListBasics';
import SectionListBasics from './Components/SectionListBasics';
*/
import Login from './UI/Login';
import Login1 from './UI/Login1';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  Profile: {screen: Login1},
});
/*
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Login/>
    );
  }
}
*/
const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
