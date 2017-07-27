import React from 'react';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    ScrollView,
    Text,
    Button
} from 'react-native';

const ChatScreen = ({ navigation }) => (
    <ScrollView>
        <Text>this is my chat</Text>
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);


const ChatTab = StackNavigator({
    Chat: {
        screen: ChatScreen,
        path: '/',
        navigationOptions: {
            title: 'Chat',
        },
    },
});

ChatTab.navigationOptions = {
    title: 'Welcome',
    tabBarLabel: 'Chat',
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
            size={26}
            style={{ color: tintColor }}
        />
    )
};

export default ChatTab;