import React, {useContext, useEffect} from 'react';
import {
    View,
    Image,
    StyleSheet,
    StatusBar,
    ToastAndroid,
    Dimensions,
    Text,
} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {
    // AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
} from 'react-native-fbsdk';
import {MatButton, Loading} from '../shared';
import {auth} from '../services/Api';
import {AuthContext} from '../services/Provider';

GoogleSignin.configure({
    webClientId:
        '53061255389-m1q22e861121jn79k9me2af05uq8tuk1.apps.googleusercontent.com',
    offlineAccess: true,
});

const Login = ({navigation}) => {
    const [loading, setLoading] = React.useState(true);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const {onLogin} = useContext(AuthContext);

    useEffect(() => {
        ngOninit();
        return () => {
            setLoading(true);
        };
    }, []);

    const ngOninit = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    getInfoFromToken = token => {
        const PROFILE_REQUEST_PARAMS = {
            fields: {
                string: 'id, name, email, picture.type(large)',
            },
        };
        const profileRequest = new GraphRequest(
            '/me',
            {token, parameters: PROFILE_REQUEST_PARAMS},
            (error, result) => {
                if (error) {
                    console.log('login info has error: ' + error);
                    setLoading(false);
                } else {
                    let data = {
                        user: {
                            email: result['email'] || '-',
                            id: result['id'],
                            name: result['name'],
                            photo: result['picture']['data']['url'],
                            provider: 'Facebook',
                        },
                    };
                    loginProcess(data);
                }
            },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    };

    loginWithFacebook = async () => {
        LoginManager.logInWithPermissions(['public_profile']).then(
            login => {
                if (login.isCancelled) {
                    ToastAndroid.show(
                        'Login facebook batal',
                        ToastAndroid.SHORT,
                    );
                    setLoading(false);
                } else {
                    setLoading(true);
                    getInfoFromToken(null);
                    // AccessToken.getCurrentAccessToken().then(data => {
                    //     const accessToken = data.accessToken.toString();
                    //     console.log('3');
                    //     getInfoFromToken(accessToken);
                    // });
                }
            },
            error => {
                console.log('Login fail with error: ' + error);
            },
        );
    };

    signIn = async () => {
        setLoading(true);
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            let data = {
                user: {
                    email: userInfo['user']['email'],
                    id: userInfo['user']['id'],
                    name: userInfo['user']['name'],
                    photo: userInfo['user']['photo'],
                    provider: 'Google',
                },
            };
            loginProcess(data);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                ToastAndroid.show('Login google batal', ToastAndroid.SHORT);
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('e 2');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                ToastAndroid.show('Sistem tidak support', ToastAndroid.SHORT);
            } else {
                console.log(error);
            }
        }
    };

    loginProcess = async data => {
        try {
            auth(data['user'])
                .then(async result => {
                    if (result.status == 200) {
                        let token = result.data.token;
                        let email = data['user']['email'];
                        onLogin(token, email);
                        setLoading(false);
                    } else {
                        ToastAndroid.show(
                            'Server error : 401',
                            ToastAndroid.SHORT,
                        );
                        setLoading(false);
                    }
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                    ToastAndroid.show('Server error : 501', ToastAndroid.SHORT);
                });
        } catch (error) {
            console.log(error);
            setLoading(false);
            ToastAndroid.show('Server error : 502', ToastAndroid.SHORT);
        }
    };

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <View style={styles.container}>
                <Image
                    style={{
                        width: windowWidth - 40,
                        height: windowHeight - 200,
                        backgroundColor: '#A1E3D8',
                        borderRadius: 10,
                        marginBottom: 10,
                        resizeMode: 'cover',
                    }}
                    source={require('../../assets/banner.jpg')}
                />
                <Text style={{fontSize: 20, fontWeight: '500'}}>
                    Cicip Apps
                </Text>
                <Text style={{marginBottom: 10, textAlign: 'center'}}>
                    Cicip aneka masakan Nusantara dari Sabang sampai Meraoke
                    hanya disini.
                </Text>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <MatButton
                        onPress={signIn}
                        type={2}
                        title={'Login Google'}></MatButton>
                    <View style={{margin: 5}}></View>
                    <MatButton
                        onPress={loginWithFacebook}
                        type={1}
                        title={'Login Facebook'}></MatButton>
                </View>
                <Loading status={loading} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default Login;
