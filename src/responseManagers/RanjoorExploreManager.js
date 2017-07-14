import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ExploreCard from '../elements/cards/ExploreCard';

export default class RanjoorExploreManager extends Component {

    render() {
        let mappedData = this.props.data.map(function(data) {
            return (
                <View>
                    <ExploreCard  poemBody={data.text}/>
                </View>
            )
        })
        return (
            <View>
                <Text>
                                    {mappedData}
                </Text>

            </View>
        )
    }
}