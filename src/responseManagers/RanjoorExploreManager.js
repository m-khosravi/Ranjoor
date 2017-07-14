import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ExploreCard from '../elements/cards/ExploreCard';

export default class RanjoorExploreManager extends Component {

    render() {
        let mappedData = this.props.data.map(() => {
            return (
                <View>
                    <ExploreCard />
                </View>
            )
        })
        return (
            <View>
                {mappedData}
            </View>
        )
    }
}