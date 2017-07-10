/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Ranjoor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}></View>
        <Image style={styles.introLogo}
          source={require('./src/Images/Logo/Ranjoor.png')}
        />
        <View style={{flex:1}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3863cc',
  },
  welcome: {
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#242329',
    marginBottom: 5,
  },
  introLogo: {
    width: 230,
    height: 230
  }
});

AppRegistry.registerComponent('Ranjoor', () => Ranjoor);
