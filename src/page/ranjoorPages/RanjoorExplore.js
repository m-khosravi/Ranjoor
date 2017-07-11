import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class RanjoorExplore extends React.Component {
    static navigationOptions = {
        title: 'Explore',
        icon: ({ tintColor }) => (
        <Image
            source={require('../../img/icons/explore.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        )       
    };
    render() {
        return(
            <View>
                <Text>This is the Ranjoor's main page</Text>
            </View>
        );
    }
}
export default RanjoorExplore