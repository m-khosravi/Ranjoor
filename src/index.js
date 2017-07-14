import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from './page/SplashScreen';
import TabWrapper from './page/RanjoorPagesWrapper';


class Ranjoor extends Component {
  render() {
    return (
      <SplashScreen />
    )
  }
}

const GotoRanjoorMain = StackNavigator({
  Splash: { screen: SplashScreen },
  TabWrapper: { screen: TabWrapper }
})

export default GotoRanjoorMain