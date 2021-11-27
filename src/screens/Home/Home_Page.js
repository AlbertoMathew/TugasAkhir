import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, Image, Button, ScrollView, RefreshControl, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, FlatList, LogBox, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Home_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
            onRefresh: () => {
                this.setState({
                    refresh: true
                })
                this.state.loadDivision()
                setTimeout(() => {
                    this.setState({
                        refresh: false
                    })
                }, 2000)
            },
            loadDivision: async () => {
                await axios.get(`https://slica.lizzies.my.id/api/division`)
                    .then((res) => {
                        const listDivision = res.data
                        this.setState({ listDivision })
                    })
            },
            
            listDivision: [],
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
                            <FontAwesome5 name={'gamepad'} brand size={20} color={'#007bff'} />
                            <Text style={style.sectionTitle}> Division</Text>
                        </View>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home', { screen: 'Tambah_Division' })}>
                            <FontAwesome5 name={'plus'} brand size={15} color={'#007bff'} />
                        </TouchableWithoutFeedback>
                    </View>
                    {this.state.listDivision.map((item) => {
                        return (
                            <View key={item.id}>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home', {
                                    screen: 'Info_Division',
                                    params: {
                                        division_id: item.id
                                    }
                                })}>
                                    <View style={style.sectionDivision}>
                                        <Image resizeMode="contain" source={{ uri: item.gambar }} style={style.sectionDivisionImage} />
                                        <View style={{ flex: 7 }}>
                                            <Text style={style.sectionDivisionTitle}>{item.nama_division}</Text>
                                            <Text style={style.sectionDivisionGenre}>{item.genre}</Text>
                                        </View>
                                        <TouchableOpacity style={style.sectionDivisionButton} onPress={() => this.props.navigation.navigate('Home', {
                                            screen: 'Info_Division',
                                            params: {
                                                division_id: item.id
                                            }
                                        })}>
                                            <Text style={{ fontFamily: 'Quicksand-Bold' }}>View</Text>
                                        </TouchableOpacity>
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

export default Home_Page;