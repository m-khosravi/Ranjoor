import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="search" size={20} color="#242329" />)

class RanjoorSearch extends React.Component {
    static navigationOptions = {
        title: 'Search',
        tabBarIcon: myIcon
    };
    render() {
        return(
            <View>
                <Text>This is the Ranjoor's search page</Text>
            </View>
        );
    }
}
export default RanjoorSearch