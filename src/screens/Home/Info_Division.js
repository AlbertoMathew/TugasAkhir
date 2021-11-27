import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Info_Division extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDivision: [],
            listPlayer: [],
            division_id: this.props.route.params.division_id,
            loadDivision: async () => {
                await axios.get(`https://slica.lizzies.my.id/api/division/` + this.state.division_id)
                    .then((res) => {
                        const dataDivision = res.data
                        this.setState({ dataDivision })
                    })
            },
            loadPlayer: async () => {
                await axios.get(`https://slica.lizzies.my.id/api/player_division/` + this.state.division_id)
                    .then((res) => {
                        const listPlayer = res.data
                        this.setState({ listPlayer })
                    })
            },
            loadUlang: () => {
                this.state.loadDivision()
                this.state.loadPlayer()
            },
            refresh: false
        };
    }

    componentDidMount() {
        this.state.loadUlang()
    }

    render() {
        return (
            <View>
                <ScrollView contentContainerStyle={style.container} refreshControl={<RefreshControl refreshing={this.state.refresh} onRefresh={this.state.loadUlang} />}>
                    <View style={{
                        flex: 0,
                        elevation: 5,
                        marginTop: 25
                    }}>
                        <View style={{
                            backgroundColor: '#e6e6e6',
                            alignItems: 'center',
                            padding: 5,
                            elevation: 2,
                            flex: 1
                        }}>
                            <Text style={{
                                fontSize: 25,
                                fontFamily: 'Quicksand-Bold',
                                color: '#212529',
                                textAlign: 'center'
                            }}>{this.state.dataDivision.nama_division}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Image source={{ uri: this.state.dataDivision.gambar }} style={{
                                flex: 1,
                                width: null,
                                aspectRatio: 1,
                                resizeMode: 'contain',
                                backgroundColor: '#f5f5f5'
                            }} />
                        </View>
                    </View>
                    <Text style={{
                        flex: 0,
                    }}>
                        {this.state.dataDivision.keterangan}
                    </Text>
                    <View style={style.section2}>
                        <View style={style.sectionHeader}>
                            <View style={style.sectionSubHeader}>
                                <FontAwesome5 name={'users'} brand size={20} color={'#007bff'} />
                                <Text style={style.sectionTitle}> Player</Text>
                            </View>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home', { screen: 'Tambah_Player_Division', params: { division_id: this.state.division_id } })}>
                                <FontAwesome5 name={'plus'} brand size={15} color={'#007bff'} />
                            </TouchableWithoutFeedback>
                        </View>
                        {this.state.listPlayer.map((item) => {
                            return (
                                <View key={item.id}>
                                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home', {
                                        screen: 'Info_Player',
                                        params: {
                                            player_id: item.id
                                        }
                                    })}>
                                        <View style={style.sectionDivision}>
                                            <Image resizeMode="contain" source={{ uri: item.gambar }} style={style.sectionDivisionImage} />
                                            <View style={{ flex: 9 }}>
                                                <Text style={style.sectionDivisionTitle}>{item.nama_player}</Text>
                                                <Text style={style.sectionPlayerText}>{item.email}</Text>
                                                <Text style={style.sectionPlayerText}>{item.asal}</Text>
                                                <Text style={style.sectionPlayerText}>{item.role}</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            )
                        })}
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
    section2: {
        marginTop: 25,
        backgroundColor: 'white',
        padding: 10
    },
    sectionHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionSubHeader: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    sectionTitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600',
        marginLeft: 5
    },
    sectionDivision: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 7
    },
    sectionDivisionImage: {
        flex: 3,
        width: '100%',
        minHeight: 100,
        marginRight: 10
    },
    sectionDivisionTitle: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 15,
        color: '#000',
    },
    sectionPlayerText: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 12,
        color: '#6c757d',
    },
})

export default Info_Division;