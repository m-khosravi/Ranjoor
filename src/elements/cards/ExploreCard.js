import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';

export default class ExploreCard extends React.Component {
    render() {
        return(
                <View>
                 <Card
                    containerStyle={{height: 150, backgroundColor:'#202026', shadowOpacity: 0.7,
                                        shadowOffset:{height:5}, shadowColor: 'black', borderWidth: 0, borderRadius: 8, flexDirection: 'row'}}
                    wrapperStyle={{alignSelf:'flex-end'}} >

                        <View style={{ flex:2,}}>  
                            <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                                    <Text style={{fontFamily:'IRANSans', marginRight:5, marginTop:8, color:'#505056'}}>حافظ</Text> 
                                    <Avatar
                                    small
                                    rounded 
                                    source={require('../../img/avatars/ferdowsi.jpg')}
                                    containerStyle={{alignSelf:'flex-end', marginRight:15,
                                                    shadowOpacity: 0.7,
                                                    shadowOffset:{height:5}, shadowColor: 'black'}}
                                    />  
                            </View>
                   
                                    <Text style={{alignSelf:'flex-end', fontFamily:'IRANSans', color:'white', marginTop: 10, marginRight:15}}>
                                        ساقیا بده جامی زان شراب روحانی
                                    </Text>
                            <Text style={{alignSelf:'flex-start', fontFamily:'IRANSans', color:'white'}}>
                                تا دمی برآساییم زین حجاب ظلمانی
                            </Text>
                        </View>
                        <View style={{alignSelf:'flex-end', backgroundColor:'transparent', flexDirection: 'row'}}>
                            <Icon 
                            name='favorite' size={24} color="#34343a" style={{marginLeft:5}}
                            />                    
                            <Icon 
                            name='grade' size={24} color="#34343a" style={{marginLeft:5}}
                            />           
                            <Button
                                textStyle={{fontSize:15}}
                                iconRight
                                backgroundColor='#4ab367'
                                fontFamily='IRANSans_UltraLight'
                                buttonStyle={{height: 15, width: 110, 
                                    borderRadius: 8, marginLeft: 165}}
                                title='ادامه مطلب'
                            />
                        </View>
                    </Card>
                </View>
        );
    }
}
