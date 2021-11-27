import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StackActions } from '@react-navigation/native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    buttonPressed() {
        if (this.state.username.toLowerCase() == 'Alberto'.toLowerCase() && this.state.password.toLowerCase() == 'alberto'.toLowerCase()) {
            this.props.navigation.dispatch(StackActions.replace('Root', { screen: 'Home' }));
        } else {
            Alert.alert('Error', 'Username atau password salah')
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                padding: 20,
                backgroundColor: 'white'
            }}>
                <Image style={style.logo} source={{
                    uri: 'https://lizzies.my.id/Logo Slica.png'
                }} />
                <View style={{
                    width: '100%'
                }}>
                    <Text style={style.label}>Username</Text>
                    <TextInput style={style.input} onChangeText={(value) => this.setState({ username: value })} value={this.state.username}></TextInput>
                    <Text style={style.label}>Password</Text>
                    <TextInput secureTextEntry style={style.input} onChangeText={(value) => this.setState({ password: value })} value={this.state.password}></TextInput>
                    <View style={style.button}>
                        <TouchableOpacity style={style.button_view} onPress={this.buttonPressed.bind(this)}>
                            <FontAwesome5 name={'sign-in-alt'} size={15} color="white" />
                            <Text style={style.button_view_text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    logo: {
        marginTop: 75,
        marginBottom: 35,
        width: 100,
        height: 100,
        borderRadius: 150,
        shadowColor: "black",
        shadowOffset: { height: 2 },
        shadowOpacity: 0.3,
    },
    label: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        marginBottom: 5
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ced4da',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        marginBottom: 15
    },
    button: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    button_view: {
        backgroundColor: '#0d6efd',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8
    },
    button_view_text: {
        color: 'white',
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        marginLeft: 10
    }
})

export default Login;