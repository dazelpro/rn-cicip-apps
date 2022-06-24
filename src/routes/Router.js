import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {PublicStack} from './PublicStack';
import {PrivateStack} from './PrivateStack';
import {SplashScreen} from '../screens';

import {AuthContext} from '../services/Provider';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const Router = () => {
    const {token, splashLoading} = useContext(AuthContext);

    return (
        <NavigationContainer>
            {splashLoading ? (
                <Stack.Navigator>
                    <Stack.Screen
                        name="SplashScreen"
                        options={{headerShown: false}}
                        component={SplashScreen}
                    />
                </Stack.Navigator>
            ) : token ? (
                <PrivateStack />
            ) : (
                <PublicStack />
            )}
        </NavigationContainer>
    );
};
