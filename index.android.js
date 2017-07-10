import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import SplashScreen from './src/Pages/SplashScreen';

export default class Ranjoor extends Component {
  render() {
    return (
      <SplashScreen />
    );
  }
}

AppRegistry.registerComponent('Ranjoor', () => Ranjoor);
