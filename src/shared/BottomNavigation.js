import {useNavigation, useRoute} from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

export default function BottomNavigation() {
    const route = useRoute();
    const navigation = useNavigation();
    console.log('ini ' + route.name);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                position: 'absolute',
                bottom: 10,
                width: '90%',
                borderRadius: 5,
                justifyContent: 'center',
                alignSelf: 'center',
                elevation: 3,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                }}>
                <View
                    style={{
                        flex: 1,
                        paddingBottom: 5,
                    }}>
                    <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress={() => navigation.navigate('dashboard')}>
                        <Image
                            source={require('../../assets/icons/home.png')}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: route.name == 'dashboard' ? 'red' : null
                            }}></Image>
                        <Text style={{fontSize: 12,color:route.name == 'dashboard' ? 'red' : null}}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        paddingBottom: 5,
                    }}>
                    <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress={() => navigation.navigate('profile')}>
                        <Image
                            source={require('../../assets/icons/home.png')}
                            style={{
                                width: 25,
                                height: 25,
                            }}></Image>
                        <Text style={{fontSize: 12}}>Explore</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        paddingBottom: 5,
                    }}>
                    <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress={() => navigation.navigate('profile')}>
                        <Image
                            source={require('../../assets/icons/home.png')}
                            style={{
                                width: 25,
                                height: 25,
                            }}></Image>
                        <Text style={{fontSize: 12}}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
