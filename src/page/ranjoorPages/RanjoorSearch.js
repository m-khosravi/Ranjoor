import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';


/* 
* This will be used to find out if the
* text on the searchbar is being changed
* and display an indicator on the right
* side of the search bar
*/
var textChanged = false;

class RanjoorSearch extends React.Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="search"
                size={ 24 } 
                color={focused ? '#4ab367' : 'white'}
            />
        ),
        headerStyle: {backgroundColor: '#202026'},  
        headerTitleStyle: {
            fontFamily:'IRANSans_UltraLight',
            color: 'white',
            alignSelf:'flex-end'
        },
    };
    render() {
        return(
            <View style={styles.SearchContainer}>
                <SearchBar
                 placeholder='　جستجوی پیشرفته'
                 round={true}
                 onChangeText={() => { textChanged = true }}
                 showLoadingIcon={true}
                 containerStyle={{backgroundColor:'#202026'}}
                 inputStyle={{backgroundColor:'#303036', fontFamily: 'IRANSans_UltraLight'}}
                 />
                <View style={{flex:2}}></View>
                <View style={styles.logoContainer}> 
                    <Image style={styles.logo}
                            source={require('../../img/logo/Ranjoor_white.png')}
                    />
                </View>
                <View style={{flex:2}}></View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    SearchContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%',
    },
    logoContainer: {
        alignContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 250,
        height: 250,
        opacity: 0.2
    },
})

export default RanjoorSearch