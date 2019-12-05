import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SingIn from './pages/SingIn';
import CheckIns from './pages/CheckIns';
import Help from './pages/OrderHelp/Help';
import SingOut from './pages/SingOut';
import Answer from './pages/OrderHelp/Answer';
import NewHelp from './pages/OrderHelp/NewHelp';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sing: createSwitchNavigator({
          SingIn,
        }),
        App: createBottomTabNavigator(
          {
            CheckIns,
            Help: {
              screen: createStackNavigator(
                {
                  Help,
                  Answer,
                  NewHelp,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                },
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: <Icon name="live-help" size={20} color="#727272" />,
              },
            },
            SingOut,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ef4d62',
              inactiveTintColor: '#727272',
              style: {
                backgroundColor: '#fff',
              },
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sing',
      },
    ),
  );
