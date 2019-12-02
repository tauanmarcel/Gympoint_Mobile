import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SingIn from './pages/SingIn';
import CheckIns from './pages/CheckIns';
import Help from './pages/Help';

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
            Help,
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
