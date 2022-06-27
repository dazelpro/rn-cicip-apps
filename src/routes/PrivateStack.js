import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, Profile, RestoDetail, RestoList} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import icons from '../constants/icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RenderTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="dashboard"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let rn = route.name;
                    let iconName;

                    if (rn === 'Dashboard') {
                        iconName = icons.home; //focused ? icons.home : icons.home;
                    } else if (rn === 'Explore') {
                        iconName = icons.explore; //focused ? icons.user : icons.user;
                    } else if (rn === 'Profile') {
                        iconName = icons.user; //focused ? icons.user : icons.user;
                    }
                    return (
                        <Image
                            style={{width: size, height: size, tintColor: focused ? '#069A8E' : '#005555'}}
                            source={iconName}
                        />
                    );
                },
                tabBarActiveTintColor: '#069A8E',
                tabBarInactiveTintColor: '#005555',
                tabBarLabel: ({tintColor, focused, item}) => {
                    console.log(route);
                    return focused ? (
                        <Text style={{color: '#069A8E', fontSize: 12, marginBottom: 5}}>
                            {route.name}
                        </Text>
                    ) : (
                        <Text style={{color: '#005555', fontSize: 12, marginBottom: 5}}>
                            {route.name}
                        </Text>
                    );
                },
            })}>
            <Tab.Screen
                name="Dashboard"
                options={{headerShown: false, title: 'Dashboard'}}
                component={Dashboard}
            />
            <Tab.Screen
                name="Explore"
                options={{headerShown: false, title: 'RestoList'}}
                component={RestoList}
            />
            <Tab.Screen
                name="Profile"
                options={{headerShown: false, title: 'Profile'}}
                component={Profile}
            />
        </Tab.Navigator>
    );
};

export const PrivateStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerShown: false}}
                name="rendertab"
                component={RenderTab}
            />
            <Stack.Screen
                name="restodetail"
                options={{headerShown: false}}
                component={RestoDetail}
            />
        </Stack.Navigator>
    );
};
