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
                    <Text style={{alignSelf:'flex-start', fontFamily:'IRANSans', color:'white', marginLeft:10}}>
                        تا دمی برآساییم زین حجاب ظلمانی
                    </Text>
                </View>
                <View style={{alignSelf:'flex-end', backgroundColor:'transparent', flexDirection: 'row'}}>
                    <Icon name="linkedin-square" size={20} color="#34343a" style={{ marginLeft: 10 }}/>
                    <Icon name="telegram" size={20} color="#34343a" style={{ marginLeft: 8 }}/>
                    <Icon name="instagram" size={20} color="#34343a" style={{ marginLeft: 8 }}/>                    
                    <Button
                        iconRight
                        icon={{name: 'book'}}
                        backgroundColor='#4ab367'
                        fontFamily='IRANSans'
                        buttonStyle={{height: 15, width: 100, 
                            borderRadius: 8, marginLeft: 150, 
                            marginRight: 0, marginBottom: 0}}
                        title='ادامه شعر'
                    />
                </View>
            </Card>
        );
    }
}
