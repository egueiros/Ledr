/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, Button, processColor} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CompaniesScreen from './screens/CompaniesScreen';
import CompanyScreen from './screens/CompanyScreen';
import styles from './themes/CompanyStyle'; 
import { LineChart } from 'react-native-charts-wrapper'
;

//  I'm just using app as a component, exporting AppContainer below for simplicity's sake. 
class App extends Component {

  static navigationOptions = {
    title: "Home"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Ledr!</Text>
        <Text style={styles.instructions}>Click the button below to see company revenues.</Text>
        <Button title="Load Companies" onPress={() => this.props.navigation.navigate("master")} />
        <LineChart style={{ flex: 1 }} data={{ dataSets: [{ label: "demo", values: [{ y: 10 }, { y: 20 }, { y: 10 }] }] }} />
      </View>
    );
  }
}




// Navigation stack definition. Why so complicated?!
const AppNavigator = createStackNavigator({
  home: App,
  master: CompaniesScreen,
  detail: CompanyScreen,
}, {
    initialRouteName: 'home'
  }
);


export default createAppContainer(AppNavigator);
