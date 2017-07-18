import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    ScrollView
} from 'react-native';
import { Card, ListItem, Button, Avatar, Grid, Row, Col } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import PoetCard from '../../elements/cards/PoetCard';
import PoetHeader from '../../elements/headers/PoetHeader';

class RanjoorPoets extends React.Component {
    constructor() {
        super();
        this.state = {
            rawData: []
        }
    }

    static navigationOptions = {
        header: null,
        title: 'Poets',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="ils"
                size={24}
                color={focused ? 'black' : '#202026'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            color: 'white'
        }
    };

    fetchGanjoorData() {
        return fetch('http://172.25.136.231:4003/v1/poets')
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
            <View style={styles.PoetsContainer}>
                <PoetHeader />
                <ScrollView>
                    <PoetCard data={this.state.rawData} />
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    PoetsContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    }
})

export default RanjoorPoets