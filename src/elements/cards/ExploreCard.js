import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    StatusBar
} from 'react-native';
import { Card, ListItem, Button, Icon, Avatar, Grid, Row, Col } from 'react-native-elements';
import Router from 'react-native-simple-router';

export default class ExploreCard extends Component {
    constructor() {
        super();
        this.state = {
            rawData: []
        }
    }

    fetchGanjoorData() {
        return fetch('http://c.ganjoor.net/beyt-json.php?a=1')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
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
        /* Mapped data will be processed right here */
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <Card
                    containerStyle={{
                        height: 180, backgroundColor: '#fafafa', shadowOpacity: 0.7,
                        shadowOffset: { height: 5 }, shadowColor: 'black', borderWidth: 0, borderRadius: 5, flexDirection: 'row'
                    }}
                    wrapperStyle={{ width: '100%', flexDirection: 'column' }}
                >
                    <Grid>
                        <Row style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                <Text style={{ fontFamily: 'IRANSans', marginRight: 5, marginTop: 12, color: '#505056' }}>{this.state.rawData.poet}</Text>
                                <Avatar
                                    medium
                                    rounded
                                    source={require('../../img/avatars/ferdowsi.jpg')}
                                    containerStyle={{
                                        alignSelf: 'flex-start',
                                        shadowOpacity: 0.7,
                                        shadowOffset: { height: 5 }, shadowColor: 'black'
                                    }}
                                />
                            </View>
                        </Row>
                        <Row style={{ flexDirection: 'row', alignSelf: 'flex-end', flex: 1 }}>
                            <View style={{ flex: 1, margin: 10 }}>
                                <View style={{ alignSelf: 'flex-end', flex: 1 }}>
                                    <Text style={{ alignSelf: 'flex-end', fontFamily: 'IRANSans', fontType: 'bold', color: 'black' }}>
                                        {this.state.rawData.m1}
                                    </Text>
                                </View>
                                <View style={{ alignSelf: 'flex-start', flex: 1 }}>
                                    <Text style={{ alignSelf: 'flex-start', fontFamily: 'IRANSans', fontType: 'bold', color: 'black', marginTop: 10 }}>
                                        {this.state.rawData.m2}
                                    </Text>
                                </View>
                            </View>
                        </Row>
                        <Row style={{ flexDirection: 'row', flex: 1, alignSelf: 'flex-end' }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', flex: 1 }}>
                                <Icon
                                    name='favorite' size={24} color="#34343a" style={{ marginLeft: 5 }}
                                />
                                <Icon
                                    name='grade' size={24} color="#34343a" style={{ marginLeft: 5 }}
                                />
                            </View>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 1, alignSelf: 'flex-end' }}>
                                <Button
                                    textStyle={{ fontSize: 15 }}
                                    iconRight
                                    backgroundColor='#705697'
                                    fontFamily='IRANSans_UltraLight'
                                    buttonStyle={{
                                        height: 15, width: 100,
                                        borderRadius: 8
                                    }}
                                    title='ادامه مطلب'
                                />
                            </View>
                        </Row>
                    </Grid>
                </Card>
                <View style={{ flex: 1 }}></View>
            </View>
        )
        return (
            <View>
                {mappedData}
            </View>
        )
    }
}