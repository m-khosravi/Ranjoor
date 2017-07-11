import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import RanjoorExplore from './ranjoorPages/RanjoorExplore';
import RanjoorSearch from './ranjoorPages/RanjoorSearch';
import RanjoorPoets from './ranjoorPages/RanjoorPoets';
import RanjoorSettings from './ranjoorPages/RanjoorSettings';
import { NavigationComponenet } from 'react-native-material-bottom-navigation';

const TabWrapper = TabNavigator({
  Explore: {screen: RanjoorExplore},
  Search: {screen: RanjoorSearch},
  Poets: {screen: RanjoorPoets},
  Settings: {screen: RanjoorSettings}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
	animationEnabled: true,
  		tabBarOptions: {
			showLabel: true,
			showIcon: true,
			upperCaseLabel: false,
			scrollEnabled: false,
		}
});

export default TabWrapper