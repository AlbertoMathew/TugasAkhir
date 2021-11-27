import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            // this.props.navigation.dispatch(StackActions.replace('Root', { screen: 'Home' }));
            //this.props.navigation.dispatch(StackActions.replace('Root', { name: 'Home', params: { screen: 'Home_Page' } }));
            this.props.navigation.dispatch(StackActions.replace('Login'));
        }, 300)
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image style={{
                    width: 300,
                    height: 300,
                    borderRadius: 150,
                    shadowColor: "black",
                    shadowOffset: { height: 2 },
                    shadowOpacity: 0.3,
                }} source={{
                    uri: 'https://lizzies.my.id/Logo Slica.png'
                }} />
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        )
    }
}

export default SplashScreen;