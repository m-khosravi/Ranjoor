import React, { Componenet } from 'react';
import { Text } from 'react-native';
import ExploreCard from '../elements/cards/ExploreCard';

export default class RanjoorExploreManager extends Componenet {
    
    rawDataMapper() {
        let mappedData = this.props.data.map(() => {
            return (
                <View>
                    <ExploreCard />
                </View>
            )
        })
    }

    render() {
        rawDataMapper();
    }
}