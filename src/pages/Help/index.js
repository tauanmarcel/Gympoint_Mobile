import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Help() {
  return <Text>Pedir Ajuda</Text>;
}

Help.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({tintColor}) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
