import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import api from '~/services/api';

import {
  Container,
  Form,
  List,
  AnswerContent,
  Answer,
  Content,
  Status,
  TxtStatus,
  AnswerDate,
  Prev,
} from './styles';

import Button from '~/components/Button';

export default function Help({navigation}) {
  const [helps, setHelps] = useState([]);

  const studenId = useSelector(state => state.persist.student.id);
  const loading = useSelector(state => state.persist.loading);

  async function loadHelps(id) {
    const response = await api.get(`help-orders/${id}/list-for-student`);

    const dateParsed = response.data.map(help => ({
      ...help,
      dateParsed: formatRelative(parseISO(help.createdAt), new Date(), {
        locale: pt,
        addSuffix: true,
      }),
    }));

    setHelps(dateParsed);
  }

  useEffect(() => {
    loadHelps(studenId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Header />
      <Container>
        <Form>
          <Button
            loading={loading}
            onPress={() => navigation.navigate('NewHelp')}>
            Novo pedido de auxilio
          </Button>
        </Form>

        <List
          data={helps}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <AnswerContent
              activeOpacity={item.answer ? 0.5 : 1}
              onPress={() =>
                item.answer
                  ? navigation.navigate('Answer', {
                      item,
                    })
                  : {}
              }>
              <Content>
                <Status>
                  <Icon
                    name="check-circle"
                    size={20}
                    color={item.answer ? '#36bf55' : '#727272'}
                  />
                  <TxtStatus answer={item.answer}>
                    {item.answer ? 'Respondido' : 'Sem resposta'}
                  </TxtStatus>
                </Status>
                <AnswerDate>{item.dateParsed}</AnswerDate>
              </Content>
              <Content>
                <Answer>{item.question}</Answer>
              </Content>
            </AnswerContent>
          )}
        />
      </Container>
    </View>
  );
}

Help.navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <Prev
      onPress={() => {
        navigation.navigate('CheckIns');
      }}>
      <Icon name="chevron-left" size={20} color="#333" />
    </Prev>
  ),
});
