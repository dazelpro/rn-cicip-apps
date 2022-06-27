import React, {useContext, useState} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {AuthContext} from '../services/Provider';
import {MatButton} from '../shared';

export default function Dashboard({navigation}) {
    const {onLogout} = useContext(AuthContext);

    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: 30,
                    backgroundColor: 'grey',
                }}>
                <View style={{backgroundColor: '#fc7303', flex: 1, height: 50}}>
                    <Text onPress={() => navigation.navigate('profile')}>Hallo</Text>
                </View>
                <View style={{backgroundColor: '#4459e3', flex: 1, height: 50}}>
                    <MatButton type={1} title={'logout'} onPress={onLogout} />
                </View>
            </View>
        );
    };
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            {renderHeader()}
            {/* <View style={{flex: 1}}></View> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        backgroundColor: '#fff',
    },
});
