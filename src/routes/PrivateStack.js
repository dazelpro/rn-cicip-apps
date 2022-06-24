import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../screens';
import {Profile} from '../screens';

const Stack = createStackNavigator();

export const PrivateStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="dashboard"
                options={{headerShown: false}}
                component={Dashboard}
            />
            <Stack.Screen
                name="profile"
                options={{headerShown: true}}
                component={Profile}
            />
        </Stack.Navigator>
    );
};
