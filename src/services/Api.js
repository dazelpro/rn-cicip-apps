import React, {useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../services/Provider';

// const rootUrl = 'http://10.0.2.2:8080/'; //Emulator
// const rootUrl = 'http://10.29.87.8:8080/'; //Real
const rootUrl = 'http://192.168.1.8:8080/'; //IP Rumah

const getHeader = () => {
    const {token, checkJWT} = useContext(AuthContext);
    checkJWT();    
    return {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
            Accept: 'application/json, text/plain, */*',
        },
    };
};

const auth = data => {
    return axios
        .post(`${rootUrl}login`, data)
        .then(async res => {
            return res;
        })
        .catch(err => {
            return err;
        });
};

const addUser = data => {
    return axios
        .post(`${rootUrl}users`, data)
        .then(async res => {
            return res;
        })
        .catch(err => {
            return err;
        });
};

const getUsers = () => {
    return axios
        .get(`${rootUrl}users`, getHeader())
        .then(async res => {
            return res.data;
        })
        .catch(err => {
            return err;
        });
};

export {auth, addUser, getUsers};
