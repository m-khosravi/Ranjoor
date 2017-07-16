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
import * as Animatable from 'react-native-animatable';


class PoetCard extends React.Component {

  _renderHeader(section, index, isActive) {
    return (
      <Animatable.View
        style={styles.header}
        duration={300}
        transition="backgroundColor"
        style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View
        style={styles.content}
        duration={300}
        transition="backgroundColor"
        style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
        <Animatable.Text
          duration={300}
          easing="ease-out"
          animation={isActive ? 'zoomIn' : false}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
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