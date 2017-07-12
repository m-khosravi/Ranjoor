import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';

class RanjoorSearch extends React.Component {
    static navigationOptions = {
        title: 'Search',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="search"
                size={ 24 } 
                color={focused ? '#4ab367' : 'white'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },  
        headerTitleStyle: {
            color: 'white'
        }
    };
    render() {
        return(
            <View style={styles.SearchContainer}>
                <View style={{flex:1}}>      </View>
                <SearchBar
                 placeholder='Search something...'
                 showLoadingIcon={this.props.isLoading? true : false}
                 round={true}
                 showLoadingIcon={this.refs.someInputRef.focus ? true : false}
                 />
                <View style={{flex:1}}>      </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    SearchContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    },
})
export default RanjoorSearch