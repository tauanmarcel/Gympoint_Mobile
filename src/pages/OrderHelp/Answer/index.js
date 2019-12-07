import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import {
  Container,
  Content,
  Headers,
  Left,
  SimpleTextRight,
  SimpleText,
} from './styles';

export default function Answer({navigation}) {
  const {question, answer, answer_at} = navigation.state.params.item;
  const answerAtParsed = formatRelative(parseISO(answer_at), new Date(), {
    locale: pt,
  });
  console.tron.log(navigation);

  return (
    <View>
      <Header />
      <Container>
        <Content>
          <Headers>
            <Left>PERGUNTA</Left>
            <SimpleTextRight>{answerAtParsed}</SimpleTextRight>
          </Headers>
          <SimpleText>{question}</SimpleText>
          <Headers>
            <Left>RESPOSTA</Left>
          </Headers>
          <SimpleText>{answer}</SimpleText>
        </Content>
      </Container>
    </View>
  );
}

Answer.navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
