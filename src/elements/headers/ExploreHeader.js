import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Divider } from 'react-native-elements';

export default class ExploreHeader extends Component {
    render(){
        return(
            <View>
                <StatusBar
                    backgroundColor="#1b1a20"
                    barStyle="light-content"
                />
                <View style={{backgroundColor:'#202026', height:60,}}>
                    <Header
                    leftComponent={{ icon: 'menu', color: '#fff', height:48, width:28 }}
                    centerComponent={<Image style={styles.logo}
                                            source={require('../../img/logo/Ranjoor_white_wide.png')}
                                    />} 
                    rightComponent={{ icon: 'home', color: '#fff', height:48, width:28  }}
                    />
                </View>
                <View>
                    <Divider style={{ backgroundColor: 'white' }} />
                </View>
            </View>


        )
    }
}

var styles = StyleSheet.create({
    logo: {
        width: 85,
        height: 40,
        marginBottom:6
    }
})