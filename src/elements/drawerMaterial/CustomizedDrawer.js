import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation';

const MorphDrawer = (props) => (
  <View style={style.container}>
    <DrawerItems {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MorphDrawer