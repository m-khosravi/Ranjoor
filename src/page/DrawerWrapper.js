import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import TabWrapper from './RanjoorPagesWrapper';

const DrawerWrapper = new DrawerNavigator({
    /* Here is our tab navigator inside the drawer navigator */
    TabWrapper: {
        screen: TabWrapper
    }
});

export default DrawerWrapper