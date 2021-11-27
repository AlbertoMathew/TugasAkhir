import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StackActions } from '@react-navigation/native';

class Tambah_Division extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDivision: [],
            nama_player: '',
            nama_player_error: '',
            email: '',
            email_error: '',
            role: '',
            role_error: '',
            link_gambar: '',
            link_gambar_error: '',
            asal: '',
            asal_error: '',
            keterangan: '',
            keterangan_error: '',
            tambahData: async () => {
                await axios({
                    method: 'POST',
                    url: 'https://slica.lizzies.my.id/api/tambah_player',
                    headers: {},
                    data: {
                        nama_player: this.state.nama_player,
                        role: this.state.role,
                        keterangan: this.state.keterangan,
                        asal: this.state.asal,
                        email: this.state.email,
                        gambar: this.state.link_gambar,
                    }
                }).then((res) => {
                    const data = res.data;
                    if (data.success == 'true') {
                        this.props.navigation.dispatch(StackActions.replace('Root', { screen: 'Home' }));
                    } else {
                        this.setState({
                            nama_player_error: data.errors.nama_player,
                            email_error: data.errors.email,
                            asal_error: data.errors.asal,
                            role_error: data.errors.role,
                            keterangan_error: data.errors.keterangan,
                            link_gambar_error: data.errors.gambar,
                        })
                    }
                })
            }
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <ScrollView contentContainerStyle={style.container}>
                    <View style={{
                        flex: 0,
                        elevation: 5,
                        marginTop: 25
                    }}>
                        <Text style={style.label}>Nama Player <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput style={style.input} onChangeText={(value) => this.setState({ nama_player: value })} value={this.state.nama_player}></TextInput>
                        <Text style={style.label_error}>{this.state.nama_player_error}</Text>
                        <Text style={style.label}>Email Address <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput style={style.input} onChangeText={(value) => this.setState({ email: value })} value={this.state.email}></TextInput>
                        <Text style={style.label_error}>{this.state.email_error}</Text>
                        <Text style={style.label}>Asal <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput style={style.input} onChangeText={(value) => this.setState({ asal: value })} value={this.state.asal}></TextInput>
                        <Text style={style.label_error}>{this.state.asal_error}</Text>
                        <Text style={style.label}>Link Gambar <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput style={style.input} onChangeText={(value) => this.setState({ link_gambar: value })} value={this.state.link_gambar}></TextInput>
                        <Text style={style.label_error}>{this.state.link_gambar_error}</Text>
                        <Text style={style.label}>Role <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput style={style.input} onChangeText={(value) => this.setState({ role: value })} value={this.state.role}></TextInput>
                        <Text style={style.label_error}>{this.state.role_error}</Text>
                        <Text style={style.label}>Keterangan</Text>
                        <TextInput style={style.input} onChangeText={(value) => this.setState({ keterangan: value })} value={this.state.keterangan} multiline={true} numberOfLines={4}></TextInput>
                        <Text style={style.label_error}>{this.state.keterangan_error}</Text>
                        <View style={style.button}>
                            <TouchableOpacity style={style.button_view} onPress={() => this.state.tambahData()}>
                                <FontAwesome5 name={'plus'} size={15} color="white" />
                                <Text style={style.button_view_text}>Tambah</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    label: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        marginBottom: 5
    },
    label_error: {
        fontSize: 11,
        color: 'red',
        marginBottom: 15
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ced4da',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,

    },
    button: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: 15
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

export default Tambah_Division;