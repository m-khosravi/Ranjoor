import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    Alert,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExploreCard from '../../elements/cards/ExploreCard';
import ExploreHeader from '../../elements/headers/ExploreHeader';
import { SearchBar } from 'react-native-elements';
import { Content } from 'native-base';
import Dataset from 'impagination';

class RanjoorExplore extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataset: null,
            datasetState: null
        }
    }

    componentDidMount() {
        console.log('impagination setup...')
        this.setupImpagination()
    }

    /* Setup the impagination method */
    setupImpagination() {
        let dataset = new Dataset({
            pageSize: 15,
            observe: (datasetState) => {
                console.log('setting the datasetState')
                this.setState({datasetState})
            },
            // Fetch data from here
            fetch(pageOffset, pageSize, stats) {
                return fetch('http://poetrydb.org/author')
                    .then(response => response.json())
                    .catch((error) => {
                        console.error(error)
                    })
            }
        })

        /* 
        * To pull all of this together and start fetching data we need to set the dataset on the components local state.
        * Then we need to set thereadOffset to record 0. This is so Impagination
        * knows exactly what record you are on when scrolling through the list.
        * If we get close to the end it will automatically fetch new records. 
        */
        dataset.setReadOffset(0)
        this.setState({ dataset })
    }


    static navigationOptions = {
        header: null,
        title: 'گشت و گذار',
        titleStyle: {
            fontFamily: 'IRANSans'
        },
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="bandcamp"
                size={24}
                color={focused ? 'black' : '#333238'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            color: 'white'
        }
    };
    render() {
        return (
            <View style={styles.ExploreContainer}>
                <ExploreHeader />
                <ScrollView >
                    <Content>
                        {this.state.datasetState.map(record => {
                            return (
                                <Animatable.View animation="fadeIn" style={{ flexDirection: 'row', marginBottom: 2 }}>
                                    <View style={{ flex: 1 }}></View>
                                    <Card
                                        containerStyle={{
                                            marginBottom: 3,
                                            height: 180, backgroundColor: '#fafafa', shadowOpacity: 0.7,
                                            shadowOffset: { height: 5 }, shadowColor: 'black', borderWidth: 0, borderRadius: 5, flexDirection: 'row'
                                        }}
                                        wrapperStyle={{ width: '100%', flexDirection: 'column' }}
                                    >
                                        <Grid>
                                            <Row style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                                    <Text style={{ fontFamily: 'IRANSans', marginRight: 5, marginTop: 12, color: '#505056' }}></Text>
                                                    <Avatar
                                                        medium
                                                        rounded
                                                        source={require('../../img/avatars/ferdowsi.jpg')}
                                                        containerStyle={{
                                                            backgroundColor: '#705697',
                                                            alignSelf: 'flex-start',
                                                            shadowOpacity: 0.7,
                                                            shadowOffset: { height: 5 }, shadowColor: 'black'
                                                        }}
                                                    />
                                                </View>
                                            </Row>
                                            <Row style={{ flexDirection: 'row', alignSelf: 'flex-end', flex: 1 }}>
                                                <View style={{ flex: 1, margin: 10 }}>
                                                    <View style={{ alignSelf: 'flex-end', flex: 1 }}>
                                                        <Text style={{ fontSize: 14, alignSelf: 'flex-end', fontFamily: 'IRANSans_Bold', color: 'black' }}>

                                                        </Text>
                                                    </View>
                                                    <View style={{ alignSelf: 'flex-start', flex: 1 }}>
                                                        <Text style={{ fontSize: 14, alignSelf: 'flex-start', fontFamily: 'IRANSans_Bold', color: 'black', marginTop: 10 }}>

                                                        </Text>
                                                    </View>
                                                </View>
                                            </Row>
                                            <Row style={{ flexDirection: 'row', flex: 1, alignSelf: 'flex-end' }}>
                                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end', flex: 1 }}>
                                                    <Icon
                                                        name='favorite' size={24} color="#34343a" style={{ marginLeft: 5 }}
                                                    />
                                                    <Icon
                                                        name='grade' size={24} color="#34343a" style={{ marginLeft: 5 }}
                                                    />
                                                </View>
                                                <View style={{ flex: 1 }}></View>
                                                <View style={{ flex: 1, alignSelf: 'flex-end' }}>
                                                    <Button
                                                        textStyle={{ fontSize: 15 }}
                                                        iconRight
                                                        backgroundColor='#705697'
                                                        fontFamily='IRANSans_UltraLight'
                                                        buttonStyle={{
                                                            height: 15, width: 100,
                                                            borderRadius: 8
                                                        }}
                                                        title='ادامه مطلب'
                                                    />
                                                </View>
                                            </Row>
                                        </Grid>
                                    </Card>
                                    <View style={{ flex: 1 }}></View>
                                </Animatable.View>
                            )
                        })}
                    </Content>
                </ScrollView>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    ExploreContainer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
})


export default RanjoorExplore