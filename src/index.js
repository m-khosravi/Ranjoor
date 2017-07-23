import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from './page/SplashScreen';
import TabWrapper from './page/RanjoorPagesWrapper';
import DrawerWrapper from './page/DrawerWrapper';
import RanjoorSearch from './page/RanjoorSearch';

class Ranjoor extends Component {
  render() {
    return (
      <SplashScreen />
    )
  }
}

const GotoRanjoorMain = StackNavigator({
  Splash: { screen: SplashScreen },
  DrawerWrapper: { screen: DrawerWrapper },
})

export default GotoRanjoorMain