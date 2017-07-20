import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import RanjoorExplore from './ranjoorPages/RanjoorExplore';
import RanjoorPoets from './ranjoorPages/RanjoorPoets';
import RanjoorFavorites from './ranjoorPages/RanjoorFavorites';
import RanjoorSettings from './ranjoorPages/RanjoorSettings';
import { NavigationComponenet } from 'react-native-material-bottom-navigation';
import RanjoorSearch from './RanjoorSearch'

const TabWrapper = TabNavigator({
  Explore: { screen: RanjoorExplore },
  Poets: { screen: RanjoorPoets },
  Search: { screen: RanjoorSearch },
  Favorites: { screen: RanjoorFavorites }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#fafafa',
      },
      pressColor: '#303036',
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'black'
      },
      upperCaseLabel: false,
    }
  });

export default TabWrapper