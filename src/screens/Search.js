import {View, Image, StatusBar} from 'react-native';
import React from 'react';


export default function Search() {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    backgroundColor: '#FFF',
                }}>
            </View>
        </>
    );
}
