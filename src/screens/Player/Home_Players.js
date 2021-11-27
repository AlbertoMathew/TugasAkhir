import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, Image, Button, ScrollView, RefreshControl, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, FlatList, LogBox, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Home_Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
            onRefresh: () => {
                this.setState({
                    refresh: true
                })
                this.state.loadPlayer()
                setTimeout(() => {
                    this.setState({
                        refresh: false
                    })
                }, 2000)
            },
            loadPlayer: async () => {
                await axios.get(`https://slica.lizzies.my.id/api/player`)
                    .then((res) => {
                        const listPlayer = res.data
                        this.setState({ listPlayer })
                    })
            },
            
            listPlayer: []
        }
    }

    componentDidMount() {
        this.state.onRefresh()
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={style.container} refreshControl={<RefreshControl refreshing={this.state.refresh} onRefresh={this.state.onRefresh} />}>
                <View style={style.section}>
                    <View style={style.sectionHeader}>
                        <View style={style.sectionSubHeader}>
                            <FontAwesome5 name={'users'} brand size={20} color={'#007bff'} />
                            <Text style={style.sectionTitle}> Player</Text>
                        </View>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Player', { screen: 'Tambah_Player' })}>
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
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexGrown: 1,
        backgroundColor: '#f2f3f8'
    },
    section: {
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
    sectionDivisionGenre: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 12,
        color: '#6c757d',
        marginBottom: 10
    },
    sectionDivisionButton: {
        flex: 2,
        borderRadius: 50,
        borderColor: '#007bff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionPlayerText: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 12,
        color: '#6c757d',
    },
})

export default Home_Players;