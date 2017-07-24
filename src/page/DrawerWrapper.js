import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import TabWrapper from './RanjoorPagesWrapper';


const DrawerWrapper = new DrawerNavigator({
    /* Here is our tab navigator inside the drawer navigator */
    TabWrapper: {
        screen: TabWrapper
    }
});

DrawerWrapper.navigationOptions = {
    header: null
}

export default DrawerWrapper