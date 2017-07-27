/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import ChatTab from './app/ChatTab';
import HomeTab from './app/HomeTab';
import SetTab from './app/SetTab';
import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';

const MyReactApp = TabNavigator({
    Home: {
        screen: HomeTab,
        path: '/'
    },
    Chat: {
        screen: ChatTab,
        path: '/chatting'
    },
    Set: {
        screen: SetTab,
        path: '/setting'
    }
});

AppRegistry.registerComponent('MyReactApp', () => MyReactApp);

