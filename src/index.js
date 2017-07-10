import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SplashScreen from './page/SplashScreen';
import RanjoorMain from './page/RanjoorMain';

export default class Ranjoor extends Component {
  render()
  {
    return StackNavigator({
        Splash: { screen: SplashScreen },
        Main: { screen: RanjoorMain}
    })
  }
}
