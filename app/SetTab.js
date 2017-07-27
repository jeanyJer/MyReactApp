/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InfoScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <Text>Info screen</Text>
        <Button
            onPress={() => navigation.navigate('DrawerOpen')}
            title="Open drawer"
        />
    </ScrollView>
);
InfoScreen.navigationOptions = {
    drawerLabel: 'Info',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons
            name="move-to-inbox"
            size={24}
            style={{ color: tintColor }}
        />
    ),
};

const SettingScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <Text>Setting screen</Text>
        <Button
            onPress={() => navigation.navigate('DrawerOpen')}
            onPress={() => navigation.navigate('DrawerOpen')}
            title="Open drawer"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);

SettingScreen.navigationOptions = {
    drawerLabel: 'Setting',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
    ),
};

const SetTab = DrawerNavigator(
    {
        Info: {
            path: '/',
            screen: InfoScreen,
            navigationOptions: {
                drawerLabel: 'Info',
                drawerIcon: ({ tintColor }) => (
                    <MaterialIcons
                        name="move-to-inbox"
                        size={24}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
        Setting: {
            path: '/set',
            screen: SettingScreen,
            navigationOptions: {
                drawerLabel: 'Setting',
                drawerIcon: ({ tintColor }) => (
                    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
                ),
            },
        },
    },
    {
        initialRouteName: 'Info',
        contentOptions: {
            activeTintColor: '#0c42fd',
        },
    }
);

SetTab.navigationOptions = {
    tabBarLabel: 'Set',
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
        />
    ),
};

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
});

export default SetTab;
