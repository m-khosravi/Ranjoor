        import React, { Component } from 'react';
        import {
            StyleSheet,
            Text,
            View,
            Image,
            Alert
        } from 'react-native';
        import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements';

        export default class ExploreCard extends Component {
            render() {
                /* Mapped data will be processed right here */
                    let mappedData = this.props.data.map(function (data1) {
                        return (
                                data1.title
                        )
                    })

                return (
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}></View>
                        <Card
                            containerStyle={{
                                width: '85%', height: 250, backgroundColor: '#202026', shadowOpacity: 0.7,
                                shadowOffset: { height: 5 }, shadowColor: 'black', borderWidth: 0, borderRadius: 8, flexDirection: 'row'
                            }}
                            wrapperStyle={{ alignSelf: 'flex-end' }} >

                            <View style={{ flex: 2, alignSelf: 'flex-end' }}>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                    <Text style={{ fontFamily: 'IRANSans', marginRight: 5, marginTop: 12, color: '#505056' }}>حافظ</Text>
                                    <Avatar
                                        medium
                                        rounded
                                        source={require('../../img/avatars/ferdowsi.jpg')}
                                        containerStyle={{
                                            alignSelf: 'flex-end', marginRight: 15,
                                            shadowOpacity: 0.7,
                                            shadowOffset: { height: 5 }, shadowColor: 'black'
                                        }}
                                    />
                                </View>

                                <View>
                                    <Text style={{ alignSelf: 'flex-end', fontFamily: 'IRANSans', color: 'white', marginTop: '10%', marginRight: '5%' }}>
                                        {mappedData}
                                    </Text>
                                    <Text style={{ alignSelf: 'flex-start', fontFamily: 'IRANSans', color: 'white' }}>
                                        تا دمی برآساییم زین حجاب ظلمانی
                                </Text>
                                </View>
                            </View>
                            <View style={{ alignSelf: 'flex-end', backgroundColor: 'transparent', flexDirection: 'row' }}>
                                <Icon
                                    name='favorite' size={24} color="#34343a" style={{ marginLeft: 5 }}
                                />
                                <Icon
                                    name='grade' size={24} color="#34343a" style={{ marginLeft: 5 }}
                                />
                                <View>
                                    <Button
                                        textStyle={{ fontSize: 15 }}
                                        iconRight
                                        backgroundColor='#4ab367'
                                        fontFamily='IRANSans_UltraLight'
                                        buttonStyle={{
                                            height: 15, width: 110,
                                            borderRadius: 8
                                        }}
                                        title='ادامه مطلب'
                                    />

                                </View>

                            </View>
                        </Card>
                        <View style={{ flex: 1 }}></View>
                    </View>
                );
            }
        }
