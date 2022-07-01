import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import { COLORS } from '../constants/thames';

export default function MatButton({type, title, onPress, icon}) {
    return (
        <View style={{flex:1}}>
            {type == '0' ? (
                <TouchableRipple style={styles.disabled}>
                    <Text style={styles.btnTxtdisabled}>
                        {title}
                    </Text>
                </TouchableRipple>
            ) : null}
            {type == '1' ? (
                <TouchableRipple
                    onPress={onPress}
                    rippleColor="rgba(0, 0, 0, .32)"
                    borderless={true}
                    style={styles.primary}>
                    <Text style={styles.btnTxtprimary}>{title}</Text>
                </TouchableRipple>
            ) : null}
            {type == '2' ? (
                <TouchableRipple
                    onPress={onPress}
                    rippleColor="rgba(0, 0, 0, .32)"
                    borderless={true}
                    style={styles.secondary}>
                    <Text style={styles.btnTxtsecondary}>{title}</Text>
                </TouchableRipple>
            ) : null}
            {type == '3' ? (
                <TouchableRipple
                    onPress={onPress}
                    rippleColor="rgba(0, 0, 0, .32)"
                    borderless={true}
                    style={styles.budgeIcon}>
                    <Image style={{width:40,height:40}} source={icon}></Image>
                </TouchableRipple>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    disabled: {
        backgroundColor: '#EEEEEE',
        width: '100%',
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf:'stretch',
    },
    primary: {
        backgroundColor: '#069A8E',
        width: '100%',
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf:'stretch',
    },
    secondary: {
        width: '100%',
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#069A8E',
        borderWidth: 1,
        alignSelf:'stretch',
    },
    budgeIcon: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: COLORS.bgGrey,
        alignSelf:'stretch',
    },
    btnTxtdisabled: {
        color: '#999999',
        fontWeight: 'bold',
        fontSize: 16,
    },
    btnTxtprimary: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    btnTxtsecondary: {
        color: '#069A8E',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
