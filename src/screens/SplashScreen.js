import {View, Image, StatusBar} from 'react-native';
import React from 'react';

import logo from '../../assets/cicip.png';

export default function SplashScreen() {
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
                    backgroundColor: '#A1E3D8',
                }}>
                <Image
                    style={{
                        width: 150,
                        height: 150,
                    }}
                    source={logo}></Image>
            </View>
        </>
    );
}
