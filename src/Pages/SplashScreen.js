
import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import RanjoorMain from './RanjoorMain';

class SplashScreen extends React.Component {
render() {
    return (
    <View style={styles.container}>
        <View style={{flex:1}}></View>
            <Animatable.View 
                animation="slideInDown"
                style={{width: 230, height: 230, backgroundColor: 'transparent'}}
                onAnimationEnd = {(endState) => {
                endState.finished ? this.props.navigation.navigate('GoToRanjoorMain'): console.log('not yet!')
                }}
            >
                <Image style={styles.introLogo}
                    source={require('../Images/Logo/Ranjoor.png')}
                />
            </Animatable.View>
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


/* This StackNavigator will change the route to the RanjoorMain.js after a couple of ms */
const GoToRanjoorMain = StackNavigator({
    Splash: { screen: SplashScreen },
    Main: { screen: RanjoorMain }
})

GoToRanjoorMain.navigationOptions = {
title: 'Ranjoor', 
};

export default SplashScreen