import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ExploreCard extends React.Component {
    render() {
        return(
            <Card
            containerStyle={{height: 150, backgroundColor:'#202026', shadowOpacity: 0.7,
                                shadowOffset:{height:5}, shadowColor: 'black', borderWidth: 0, borderRadius: 8, flexDirection: 'row'}}
            wrapperStyle={{alignSelf:'flex-end'}} >
                <View style={{ flex:2,}}>
                            <Text style={{alignSelf:'flex-end', fontFamily:'IRANSans', color:'white', marginTop: 10, marginRight:10}}>
                                ساقیا بده جامی زان شراب روحانی
                            </Text>
                    <Text style={{alignSelf:'flex-start', fontFamily:'IRANSans', color:'white'}}>
                        تا دمی برآساییم زین حجاب ظلمانی
                    </Text>
                </View>
                <View style={{alignSelf:'flex-end', backgroundColor:'transparent', flexDirection: 'row'}}>
                    <Icon name="share" size={20} color="#34343a" style={{ }}/>
                    <Icon name="heart" size={20} color="#34343a" style={{ marginLeft: 8 }}/>             
                    <Button
                        textStyle={{fontSize:15}}
                        iconRight
                        backgroundColor='#4ab367'
                        fontFamily='IRANSans_UltraLight'
                        buttonStyle={{height: 15, width: 110, 
                            borderRadius: 8, marginLeft: 175, 
                            marginRight: 0, marginBottom: 0}}
                        title='ادامه مطلب'
                    />
                </View>
            </Card>
        );
    }
}