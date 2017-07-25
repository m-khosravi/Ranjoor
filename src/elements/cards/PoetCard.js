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


export default class PoetCard extends Component {
  render() {
    /* Mapped data will be processed right here */
    let mappedData = this.props.data.authors.map(function (data1, index) {
      console.log
      return (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <Card
            containerStyle={{
              backgroundColor: 'black', shadowOpacity: 0.7,
              shadowOffset: { height: 5 }, shadowColor: 'black', borderWidth: 0, borderRadius: 5, flexDirection: 'row'
            }}
            wrapperStyle={{ width: '100%', flexDirection: 'column' }}
          >
            <View>
              <Text style={{ fontSize:20, alignSelf: 'flex-start', fontFamily: 'IRANSans', color: '#705697' }}>
                {data1}
              </Text>
            </View>
          </Card>
          <View style={{ flex: 1 }}></View>
        </View>
      )
    })
    return (
      <View>
        {mappedData}
      </View>
    )
  }
}