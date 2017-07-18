import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoriteHeader from '../../elements/headers/FavoriteHeader';

class RanjoorFavorites extends React.Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="star"
                size={24}
                color={focused ? '#4ab367' : 'white'}
            />
        ),
        title: 'Favorites',
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            color: 'white'
        },
        headerRight: true
    };
    render() {
        return (
            <View style={styles.FavoritesContainer}>
                <FavoriteHeader />
                <Text>This is the Ranjoor's Favorites page</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    FavoritesContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    }
})

export default RanjoorFavorites