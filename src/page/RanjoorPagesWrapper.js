import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import RanjoorExplore from './ranjoorPages/RanjoorExplore';
import RanjoorSearch from './ranjoorPages/RanjoorSearch';
import RanjoorPoets from './ranjoorPages/RanjoorPoets';
import RanjoorSettings from './ranjoorPages/RanjoorSettings';

const TabWrapper = TabNavigator({
  Explore: {screen: ExploreScreen},
  Search: {screen: SetupScreen},
  Poets: {screen: RanjoorPoets},
  Settings: {screen: RanjoorSettings}
});

export default TabWrapper