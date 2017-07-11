import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class RanjoorSettings extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };
    render() {
        return(
            <View>
                <Text>This is the Ranjoor's poets page</Text>
            </View>
        );
    }
}
export default RanjoorSettings