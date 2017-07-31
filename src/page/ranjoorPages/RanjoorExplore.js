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
import Dataset from 'impagination';

class RanjoorExplore extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataset: null,
            datasetState: null
        }

    }
    /* Setup the imagination method */
    setupImpagination() {
        let dataset = new Dataset({
            pageSize: 15,
            observe: (datasetState) => {
                this.setState({ datasetState })
            },
            // Fetch data from here
            fetch(pageOffset, pageSize, stats) {
                return fetch('http://c.ganjoor.net/beyt-json.php?a=1')
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
                    <StatusBar
                        backgroundColor="#705697"
                        barStyle="light-content"
                    />
                    <View>
                        <ExploreCard />
                        <ExploreCard />
                    </View>
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