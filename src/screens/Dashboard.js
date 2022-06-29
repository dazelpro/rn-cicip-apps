import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import icons from '../constants/icons';
import {FONTS} from '../constants/thames';
import {AuthContext} from '../services/Provider';
import {MatButton} from '../shared';

export default function Dashboard({navigation}) {
    const {onLogout} = useContext(AuthContext);

    const DismissKeyboard = ({children}) => {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                {children}
            </TouchableWithoutFeedback>
        );
    };

    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: 30,
                    paddingHorizontal: 18,
                }}>
                <View
                    style={{
                        flex: 1,
                        height: 50,
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 11,
                            marginBottom: -5,
                            ...FONTS.jktMedium,
                        }}>
                        Hallo
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            ...FONTS.jktBold,
                        }}>
                        Zeldianto,
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        height: 50,
                        justifyContent: 'center',
                    }}>
                    <Image
                        style={{width: 30, height: 30, alignSelf: 'flex-end'}}
                        source={{
                            uri: 'https://cdn.dribbble.com/users/5994307/avatars/small/cb650aa59e31121cee4d8921b2d7e50d.png?1632822869',
                        }}
                    />
                </View>
            </View>
        );
    };
    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                    translucent
                />
                {renderHeader()}
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.img}
                        source={icons.search}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mau makan apa hari ini?"
                        placeholderTextColor="#A0ADCB" 
                        keyboardType="default"
                    />
                </View>
            </View>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    img: {
        padding: 10,
        margin: 8,
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F8FB',
        height: 40,
        borderRadius: 12,
        margin: 10,
    },
    input: {
        ...FONTS.jktMedium,
        paddingEnd: 30,
        fontSize: 12,
        color: '#A0ADCB',
        flex:1
    },
});
