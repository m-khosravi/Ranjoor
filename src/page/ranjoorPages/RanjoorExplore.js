import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExploreCard from '../../elements/ExploreCard'

class RanjoorExplore extends React.Component {
    static navigationOptions = {
        title: 'Explore',
        tabBarIcon: ({ tintColor, focused  }) => (
            <Icon
                name="bandcamp"
                size={ 24 } 
                color={focused ? '#4ab367' : 'white'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },  
        headerTitleStyle: {
            color: 'white'
        }     
    };
    render() {
        return(
            <View style={styles.ExploreContainer}>
                <ExploreCard />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    ExploreContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    },
})
export default RanjoorExplore