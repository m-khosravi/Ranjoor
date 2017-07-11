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
  tabBarComponent: NavigationComponenet,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        MoviesAndTV: {
          barBackgroundColor: '#37474F'
        },
        Music: {
          barBackgroundColor: '#00796B'
        },
        Newsstand: {
          barBackgroundColor: '#EEEEEE',
          labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
          activeLabelColor: '#212121',
        }
      }
    }
  }
});

export default TabWrapper