import React, {createContext, useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {setItem, getItem, removeItem} from './Helpers';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');

    const [splashLoading, setSplashLoading] = useState(false);

    const onLogin = (token, email) => {
        setItem(token);
        setToken(token);
        setEmail(email);
    };

    const onLogout = () => {
        setToken('');
        removeItem();
        console.log('keluarrr');
    };

    const checkJWT = async () => {
        try {
            let token = await getItem();
            if (token) {
                let decode = jwt_decode(token);
                console.log(token);
                if (decode.exp < Date.now() / 1000) {
                    onLogout();
                } else {
                    setToken(token);
                    setSplashLoading(false);
                }
            }
        } catch (e) {
            onLogout();
        }
    };

    const isLoggedin = async () => {
        try {
            setSplashLoading(true);
            let token = await getItem();
            if (token) {
                checkJWT();
            } else {
                onLogout();
                setSplashLoading(false);
            }
        } catch (e) {
            setSplashLoading(false);
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedin();
        return () => {
            setToken('');
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{
                token,
                splashLoading,
                onLogin,
                onLogout,
                checkJWT
            }}>
            {children}
        </AuthContext.Provider>
    );
};
