import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    Button,
    ScrollView,
    Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';


const HomeScreen = ({ navigation }) => (
    <ScrollView>
        <Text>this is my home</Text>
        <Button
            onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
            title="Open profile screen"
        />
    </ScrollView>
);


const ProfileScreen = ({ navigation }) => (
    <ScrollView>
        <Text>this is {navigation.state.params.name}'s Profile</Text>
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);


const HomeTab = StackNavigator({
    Home: {
        screen: HomeScreen,
        path: '/',
        navigationOptions: {
            title: 'Welcome',
        },
    },
    Profile: {
        screen: ProfileScreen,
        path: '/profile/:name',
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}'s Profile!`,
        }),
    },
});

HomeTab.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
        />
    ),
};

export default HomeTab;