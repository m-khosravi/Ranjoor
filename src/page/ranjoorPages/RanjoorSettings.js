import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="cogs" size={20} color="#242329" />)

class RanjoorSettings extends React.Component {
    static navigationOptions = {
        title: 'Settings',
        tabBarIcon: myIcon
    };
    render() {
        return(
            <View>
                <Text>This is the Ranjoor's settings page</Text>
            </View>
        );
    }
}
export default RanjoorSettings