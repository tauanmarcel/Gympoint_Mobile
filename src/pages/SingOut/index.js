import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {singOut} from '~/store/modules/persist/actions';

export default function SingOut() {
  const dispatch = useDispatch();

  dispatch(singOut());

  return <View />;
}

SingOut.navigationOptions = {
  tabBarLabel: 'Sair',
  tabBarIcon: ({tintColor}) => (
    <Icon name="exit-to-app" size={20} color={tintColor} />
  ),
};
