import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class RanjoorPoets extends React.Component {
    static navigationOptions = {
        title: 'Poets',
    };
    render() {
        return(
            <View>
                <Text>This is the Ranjoor's poets page</Text>
            </View>
        );
    }
}
export default RanjoorPoets