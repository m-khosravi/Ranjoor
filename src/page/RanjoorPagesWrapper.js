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
      style: {
        backgroundColor: '#202026',
        height: 42
      },
      pressColor: '#303036',
			showLabel: true,
			showIcon: true,
      indicatorStyle: {
        backgroundColor: '#4ab367'
      },
			upperCaseLabel: false,
		}
});

export default TabWrapper