import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native';
import { Card, ListItem, Button, Avatar, Grid, Row, Col } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Accordion from 'react-native-collapsible/Accordion';


class PoetCard extends React.Component {

    _renderHeader(section) {
        return (
            <View >
                <Text>{section.name}</Text>
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View>
                <Text>{section.name}</Text>
            </View>
        );
    }

    render() {
        /* Mapped data will be processed right here */
        let SECTIONS = this.props.data
        return (
            <Accordion
                sections={SECTIONS}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
            />
        )
    }
}

var styles = StyleSheet.create({
    PoetsContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    }
})

export default PoetCard