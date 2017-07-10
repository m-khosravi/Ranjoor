import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SplashScreen from './page/SplashScreen';
import RanjoorMain from './page/RanjoorMain';

class Ranjoor extends Component {
  render()
  {
    return (
      <SplashScreen/>
    )
  }
}

const GotoRanjoorMain = StackNavigator({
  Splash: { screen: SplashScreen },
  Main: { screen: RanjoorMain }
})

GotoRanjoorMain.navigationOptions = {
  headerStyle: styles.ranjHeader
}


const styles = StyleSheet.create({
  ranjHeader: {
    backgroundColor: '#242329'
  }
})
export default GotoRanjoorMain