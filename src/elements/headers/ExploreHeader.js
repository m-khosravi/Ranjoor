import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';
import { Header, Divider, Button, Icon } from 'react-native-elements';

const searchButton = (<Button
    small
    icon={{ name: 'search', type: 'font-awesome', color: '#909096' }}
    borderRadius={5}
    backgroundColor='transparent'
/>)

const channelButton = (<Button
    small
    icon={{ name: 'telegram', type: 'font-awesome', color: '#909096' }}
    backgroundColor='transparent'
    borderRadius={5}
    iconRight={true}
/>)

export default class ExploreHeader extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="#f0f0f0"
                    barStyle="dark-content"
                />
                <View style={{ flexDirection: 'column', backgroundColor: '#fafafa', height: 50 }}>
                    <Header
                        rightComponent={
                            <Icon
                                containerStyle={{ marginBottom: '63%' }}
                                size={25}
                                name='heartbeat'
                                type='font-awesome'
                                color='black'
                                onPress={() => dispatch({
                                    type: 'Navigation/Navigate',
                                    index: 0,
                                    actions: [{ type: 'NAVIGATE', routeName: this.props.navIWasLookingFor }]
                                })} />
                        }
                        centerComponent={
                            <Text style={{ fontSize: 35, fontFamily: 'Mj_Moshfegh', color: 'black', marginBottom: 8 }}>گنجور</Text>
                        }
                    />
                </View>
                <View>
                    <Divider style={{ backgroundColor: 'white' }} />
                </View>
            </View>


        )
    }
}
