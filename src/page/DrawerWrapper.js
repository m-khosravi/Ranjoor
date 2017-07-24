import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import TabWrapper from './RanjoorPagesWrapper';
import MorphDrawer from '../elements/drawerMaterial/CustomizedDrawer';

const DrawerWrapper = new MorphDrawer({
    /* Here is our tab navigator inside the drawer navigator */
    TabWrapper: {
        screen: TabWrapper
    }
},{
    contentOptions: {
        labelStyle : {
            fontFamily:'IRANSans'
        }
    }
});

/* Navigation Options are implemented here */
DrawerWrapper.navigationOptions = {
    header: null, 
}
export default DrawerWrapper