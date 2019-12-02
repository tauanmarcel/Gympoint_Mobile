import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';

import logoTop from '~/assets/logo-top.png';

import {Container} from './styles';

export default function Header() {
  const signed = useSelector(state => state.persist.signed);

  return (
    <Container signed={signed}>
      <Image source={logoTop} />
    </Container>
  );
}
