import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExploreCard from '../../elements/cards/ExploreCard';
import ExploreHeader from '../../elements/headers/ExploreHeader';
import { SearchBar } from 'react-native-elements';

class RanjoorExplore extends Component {

    static navigationOptions = {
        header: null,
        title: 'گشت و گذار',
        titleStyle: {
            fontFamily: 'IRANSans'
        },
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="bandcamp"
                size={24}
                color={focused ? 'black' : '#333238'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            color: 'white'
        }
    };

    render() {
        return (
            
            <View style={styles.ExploreContainer}>
                <StatusBar
                    backgroundColor="#705697"
                    barStyle="light-content"
                />
                <ExploreHeader />
                <StatusBar
                    backgroundColor="#705697"
                    barStyle="light-content"
                />
                <ScrollView>
                <StatusBar
                    backgroundColor="#705697"
                    barStyle="light-content"
                />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    ExploreContainer: {
        backgroundColor: '#8e8d93',
        height: '100%',
        width: '100%'
    },
})
export default RanjoorExplore