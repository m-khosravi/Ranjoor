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
                color={focused ? 'black' : '#333238'}
            />
        ),
        title: 'Favorites',
        headerStyle: { backgroundColor: '#333238' },
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
        backgroundColor: '#8e8d93',
        height: '100%',
        width: '100%'
    }
})

export default RanjoorFavorites