import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class RanjoorMain extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return(
            <View>
                <Text>This is the Ranjoor's main page</Text>
            </View>
        );
    }
}
export default RanjoorMain