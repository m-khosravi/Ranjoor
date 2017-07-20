import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from './page/SplashScreen';
import TabWrapper from './page/RanjoorPagesWrapper';
import RanjoorSearch from './page/RanjoorSearch'

class Ranjoor extends Component {
  render() {
    return (
      <SplashScreen />
    )
  }
}

const GotoRanjoorMain = StackNavigator({
  Splash: { screen: SplashScreen },
  TabWrapper: { screen: TabWrapper },
  SearchWrapper: { screen: RanjoorSearch }
})

export default GotoRanjoorMain