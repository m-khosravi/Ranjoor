
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import FadeInView from '../Animations/FadeInAnimation';

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}></View>
          <FadeInView style={{width: 230, height: 230, backgroundColor: 'transparent'}}>
            <Image style={styles.introLogo}
              source={require('../Images/Logo/Ranjoor.png')}
            />
          </FadeInView>
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

export default SplashScreen