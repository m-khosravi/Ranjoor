import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const searchIcon = (<Icon name='search' size={20} color='#900' />)
class RanjoorExplore extends React.Component {
    static navigationOptions = {
        title: 'Explore',
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