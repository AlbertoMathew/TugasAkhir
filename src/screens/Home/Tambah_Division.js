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
            nama_division: '',
            nama_division_error: '',
            genre: '',
            genre_error: '',
            link_gambar: '',
            link_gambar_error: '',
            keterangan: '',
            keterangan_error: '',
            tambahData: async () => {
                await axios({
                    method: 'POST',
                    url: 'https://slica.lizzies.my.id/api/tambah_division',
                    headers: {},
                    data: {
                        nama_division: this.state.nama_division,
                        genre: this.state.genre,
                        keterangan: this.state.keterangan,
                        gambar: this.state.link_gambar,
                    }
                }).then((res) => {
                    const data = res.data;
                    if (data.success == 'true') {
                        this.props.navigation.dispatch(StackActions.replace('Root', { screen: 'Home' }));
                    } else {
                        this.setState({
                            nama_division_error: data.errors.nama_division,
                            genre_error: data.errors.genre,
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
                        <Text style={style.label}>Nama Divisi <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput style={style.input} onChangeText={(value) => this.setState({ nama_division: value })} value={this.state.nama_division}></TextInput>
                        <Text style={style.label_error}>{this.state.nama_division_error}</Text>
                        <Text style={style.label}>Genre <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput style={style.input} onChangeText={(value) => this.setState({ genre: value })} value={this.state.genre}></TextInput>
                        <Text style={style.label_error}>{this.state.genre_error}</Text>
                        <Text style={style.label}>Link Gambar <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput style={style.input} onChangeText={(value) => this.setState({ link_gambar: value })} value={this.state.link_gambar}></TextInput>
                        <Text style={style.label_error}>{this.state.link_gambar_error}</Text>
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