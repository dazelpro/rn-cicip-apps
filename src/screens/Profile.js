import React, {useContext} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
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

    return (
        <View>
            <Text style={{color: '#000'}}>Halo</Text>
            <MatButton type={0} onPress={logout} title={'Logout'}></MatButton>
        </View>
    );
}
