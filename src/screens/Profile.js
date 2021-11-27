import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'f2f3f8', }}>
                <ScrollView contentContainerStyle={{
                    flexGrown: 1
                }}>
                    <Image source={{
                        uri: 'https://lizzies.my.id/Logo Slica.png'
                    }} style={{
                        marginTop: 30,
                        alignSelf: 'center',
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        backgroundColor: 'white',
                        zIndex: 99
                    }}>
                    </Image>
                    <View style={{
                        backgroundColor: 'white',
                        marginTop: -70,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        zIndex: 5,
                        paddingHorizontal: 25,
                    }}>
                        <Text style={{
                            marginTop: 75,
                            textAlign: 'center',
                            color: '#0d6efd',
                            fontSize: 30,
                            fontFamily: 'Quicksand-Bold',
                            marginBottom: 25
                        }}>Slashious Canrole{"\n"}eSports</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Quicksand-SemiBold', marginBottom: 25, lineHeight: 25 }}>Slashious Canrole eSports (Slica) merupakan organisasi team eSport. Team eSport ini dibangun pada permainan kompetitif dan hiburan. Slica pertama kali dibuat oleh Alberto "Mathew" Christoper, yang merupakan Ketua Bidang eSports pada Ekstrakulikuler Sekolah Menengah Atas. Didirikan Slashious Canrole eSport bertujuan untuk memajukan bidang eSports di sekolahnya. Misi Slashious Canrole eSports sekarang adalah untuk memberikan para gamer sesuatu yang bisa dibanggakan.</Text>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'Quicksand-Bold',
                            color: '#dc3545',
                            alignSelf: 'center'
                        }}> Team Leader</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image source={{
                                uri: 'https://lizzies.my.id/alberto.jpeg'
                            }} style={{
                                marginTop: 30,
                                alignSelf: 'center',
                                width: 170,
                                height: 170,
                                borderRadius: 100,
                                backgroundColor: 'white',
                                zIndex: 99,
                                marginRight: 20,
                            }}></Image>
                            <View>
                                <Text style={{ textAlign: 'center', fontSize: 18, color: '#ffc107', fontFamily: 'Quicksand-Bold', marginBottom: 10 }}>Alberto Mathew{'\n'}Christoper</Text>
                                <Text style={{ textAlign: 'center', fontSize: 13, color: '#198754', fontFamily: 'Quicksand-Bold', }}>Universitas Diponegoro</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Profile;