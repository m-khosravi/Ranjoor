import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="search" size={24} color="#ffffff" />)

class RanjoorSearch extends React.Component {
    static navigationOptions = {
        title: 'Search',
        tabBarIcon: myIcon,
        headerStyle: { backgroundColor: '#202026' },  
        headerTitleStyle: {
            color: 'white'
        }
    };
    render() {
        return(
            <View style={styles.SearchContainer}>
                <Text>This is the Ranjoor's search page</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    SearchContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    }
})
export default RanjoorSearch