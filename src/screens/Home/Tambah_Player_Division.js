import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StackActions } from '@react-navigation/native';

class Tambah_Player_Division extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_player: '',
            id_player_error: '',
            division_id: this.props.route.params.division_id,
            listPlayer: [],
            loadPlayer: async () => {
                await axios.get(`https://slica.lizzies.my.id/api/list_is_not_player_division/` + this.state.division_id)
                    .then((res) => {
                        const listPlayer = res.data
                        this.setState({ listPlayer })
                    })
            },
            tambahData: async () => {
                await axios({
                    method: 'POST',
                    url: 'https://slica.lizzies.my.id/api/tambah_player_division',
                    headers: {},
                    data: {
                        id_player: this.state.id_player,
                        id_division: this.state.division_id
                    }
                }).then((res) => {
                    const data = res.data;

                    if (data.success == 'true') {
                        this.props.navigation.goBack(null)
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
        this.state.loadPlayer()
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
                        <Text style={style.label}>Player <Text style={{ color: 'red' }}>*</Text></Text>
                        <Picker
                            selectedValue={this.state.id_player}
                            style={{ width: '100%' }}
                            onValueChange={(value) => this.setState({ id_player: value })}
                        >
                            {this.state.listPlayer.map((item) => {
                                return (
                                    <Picker.Item key={item.id} label={item.nama_player} value={item.id} />
                                )
                            })}
                        </Picker>
                        <Text style={style.label_error}>{this.state.id_player_error}</Text>
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

export default Tambah_Player_Division;