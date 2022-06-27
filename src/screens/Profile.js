import React, {useContext} from 'react';
import {View, Text, ToastAndroid, StatusBar} from 'react-native';
import {MatButton} from '../shared';
import {AuthContext} from '../services/Provider';
import {getUsers} from '../services/Api';

export default function Profile({navigation}) {
    const {onLogout} = useContext(AuthContext);
    ngOninit();
    async function ngOninit() {
        try {
            getUsers()
                .then(async result => {
                    if (result.success) {
                        console.log(result.data);
                    } else {
                        ToastAndroid.show(
                            'Server error : 401',
                            ToastAndroid.SHORT,
                        );
                    }
                })
                .catch(error => {
                    console.log(error);
                    ToastAndroid.show('Server error : 501', ToastAndroid.SHORT);
                });
        } catch (error) {
            console.log(error);
            ToastAndroid.show('Server error : 502', ToastAndroid.SHORT);
        }
    }

    function logout() {
        onLogout();
    }

    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: 30,
                    backgroundColor: 'grey',
                }}>
                <View style={{backgroundColor: '#fc7303', flex: 1, height: 50}}>
                    <Text onPress={() => navigation.navigate('profile')}>
                        ini page profile
                    </Text>
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
        </>
    );
}
