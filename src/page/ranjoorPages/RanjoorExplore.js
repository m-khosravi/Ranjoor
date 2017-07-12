import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class RanjoorExplore extends React.Component {
    static navigationOptions = {
        title: 'Explore',
        tabBarIcon: ({ tintColor, focused  }) => (
            <Icon
                name="bandcamp"
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
            <View style={styles.ExploreContainer}>
                <Card
                containerStyle={{backgroundColor:'#202026'}}
                image={require('../../img/walls/wall1.jpg')}>
                <View style={{backgroundColor:'transparent'}}>
                    <Button
                        iconRight
                        icon={{name: 'book'}}
                        backgroundColor='#4ab367'
                        fontFamily='IRANSans'
                        buttonStyle={{alignSelf: 'flex-end', height: 15, width: 100, 
                            borderRadius: 8, marginLeft: 0, 
                            marginRight: 0, marginBottom: 0}}
                        title='ادامه شعر'
                    />                
                </View>
                </Card>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    ExploreContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    },
})
export default RanjoorExplore