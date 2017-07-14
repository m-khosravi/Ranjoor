import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class RanjoorSettings extends React.Component {
    static navigationOptions = {
        header: null,
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="sliders"
                size={24}
                color={focused ? '#4ab367' : 'white'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            color: 'white'
        }
    };
    render() {
        return (
            <View style={styles.SettingsContainer}>
                <Text>This is the Ranjoor's settings page</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    SettingsContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    }
})
export default RanjoorSettings