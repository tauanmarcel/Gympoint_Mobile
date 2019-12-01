import React from 'react';
import {Image} from 'react-native';

import {Container, Form, FormInput, SubmitButton} from './styles';

import logo from '~/assets/logo.png';

export default function SingIn() {
  function handleSubmit() {}

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
