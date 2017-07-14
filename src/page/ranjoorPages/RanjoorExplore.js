import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExploreCard from '../../elements/cards/ExploreCard';
import ExploreHeader from '../../elements/headers/ExploreHeader';
import RanjoorExploreManager from '../../responseManagers/RanjoorExploreManager';

class RanjoorExplore extends React.Component {

    constructor(){
        super();
        this.state = {
            rawData: []
        }
    }
    
    static navigationOptions = {
        header: null,
        title: 'Explore',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="bandcamp"
                size={24}
                color={focused ? '#4ab367' : 'white'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            color: 'white'
        }
    };
    
    fetchGanjoorData() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({rawData: responseJson})
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componenetDidMount() {
        this.fetchGanjoorData();
    }

    render() {
        return (
            <View style={styles.ExploreContainer}>
                <ExploreHeader />
                <ScrollView>
                    <RanjoorExploreManager data = {this.state.rawData} />
                </ScrollView>
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