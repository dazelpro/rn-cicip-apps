import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Dashboard} from '../screens';

const Stack = createStackNavigator();

export const PublicStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                options={{headerShown: false}}
                component={Login}
            />
        </Stack.Navigator>
    );
};
