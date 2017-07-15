import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native';
import { Card, ListItem, Button, Icon, Avatar, Grid, Row, Col } from 'react-native-elements';

export default class ExploreCard extends Component {
    render() {
        /* Mapped data will be processed right here */
        let mappedData = this.props.data.map(function (data1, index) {
            return (
                <View style={{flexDirection:'row'}}>
                    <View style={{ flex: 1 }}></View>
                    <Card
                        containerStyle={{
                             height: 250, backgroundColor: '#202026', shadowOpacity: 0.7,
                            shadowOffset: { height: 5 }, shadowColor: 'black', borderWidth: 0, borderRadius: 8, flexDirection: 'row'}}
                        wrapperStyle={{width:'100%', flexDirection:'column'}}                            
                            >
                        <Grid>
                            <Row style={{flexDirection:'row', justifyContent:'flex-end'}}>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                    <Text style={{ fontFamily: 'IRANSans', marginRight: 5, marginTop: 12, color: '#505056' }}>حافظ</Text>
                                    <Avatar
                                        medium
                                        rounded
                                        source={require('../../img/avatars/ferdowsi.jpg')}
                                        containerStyle={{
                                            alignSelf: 'flex-start', marginRight: 15,
                                            shadowOpacity: 0.7,
                                            shadowOffset: { height: 5 }, shadowColor: 'black'
                                        }}
                                    />
                                </View>
                            </Row>
                            <Row>
                                <View>
                                    <Text style={{ alignSelf: 'flex-start', fontFamily: 'IRANSans', color: 'white' }}>
                                        {data1.title}
                                    </Text>
                                </View>
                            </Row>
                            <Row style={{ flexDirection:'row'}}>
                                <View style={{ flexDirection:'row', flex:1}}>
                                    <Icon
                                        name='favorite' size={24} color="#34343a" style={{ marginLeft: 5 }}
                                    />
                                    <Icon
                                        name='grade' size={24} color="#34343a" style={{ marginLeft: 5 }}
                                    />
                                </View>
                                <View style={{flex:1}}></View>
                                <View style={{flex:1}}>
                                    <Button
                                        textStyle={{ fontSize: 15 }}
                                        iconRight
                                        backgroundColor='#4ab367'
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
        })
        return (
            <View>
                {mappedData}
            </View>
        )
    }
}
