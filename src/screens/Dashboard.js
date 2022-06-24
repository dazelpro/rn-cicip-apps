import React, {useContext, useState} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import { AuthContext } from '../services/Provider';
import MatButton from '../shared/MatButton';

export default function Dashboard({navigation}) {
    const {onLogout} = useContext(AuthContext);
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <View style={styles.container}>
                <Text style={{color: '#000'}}>Halo</Text>
                <MatButton
                    type={2}
                    title={'ss'}
                    onPress={() => onLogout()}></MatButton>
            </View>
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
