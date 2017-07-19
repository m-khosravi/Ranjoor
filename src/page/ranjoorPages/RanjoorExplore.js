import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExploreCard from '../../elements/cards/ExploreCard';
import ExploreHeader from '../../elements/headers/ExploreHeader';
import { SearchBar } from 'react-native-elements';

class RanjoorExplore extends Component {

    constructor() {
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
                color={focused ? 'black' : '#333238'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            color: 'white'
        }
    };

    fetchGanjoorData() {
        return fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ rawData: responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.fetchGanjoorData();
    }

    render() {
        return (
            <View style={styles.ExploreContainer}>
                <ExploreHeader />
                <ScrollView>
                    <ExploreCard data={this.state.rawData} />
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