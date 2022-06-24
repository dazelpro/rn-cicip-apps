import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = props => {
    let status = props['status'];
    return (
        <>
            {status === true ? (
                <View
                    style={[
                        StyleSheet.absoluteFillObject,
                        styles.containerLoader,
                    ]}>
                    <LottieView
                        source={require('../../assets/loader.json')}
                        autoPlay
                        loop></LottieView>
                </View>
            ) : null}
        </>
    );
};

const styles = StyleSheet.create({
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
});

export default Loading;
