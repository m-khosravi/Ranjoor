
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';



export default class SplashScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#ffffff',
            shadowOpacity: 0,
            shadowOffset: { height: 0, width: 0 },
            elevation: 0
        },
    }
    render() {
        const { dispatch } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#705697"
                    barStyle="light-content"
                />
                <View style={{ flex: 1 }}></View>
                <Animatable.View
                    animation="fadeIn"
                    duration={2000}
                    style={{ width: 230, height: 230, backgroundColor: 'transparent' }}
                    onAnimationEnd={() => {
                        dispatch({
                            type: 'Navigation/RESET',
                            index: 0,
                            actions: [{ type: 'NAVIGATE', routeName: 'DrawerWrapper' }]
                        })
                    }}
                >
                    <Image style={styles.introLogo}
                        source={require('../img/logo/Ranjoor.png')}
                    />
                </Animatable.View>
                <View style={{ flex: 1 }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 45,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#242329',
        marginBottom: 5,
    },
    introLogo: {
        width: 230,
        height: 230
    }
});
