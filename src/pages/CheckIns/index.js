import React, {useState, useEffect} from 'react';
import {Alert, View} from 'react-native';
import {useSelector} from 'react-redux';

import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import Header from '~/components/Header';

import {
  Container,
  Form,
  SubmitButton,
  List,
  CheckIn,
  Left,
  CheckDate,
} from './styles';

export default function CheckIns() {
  const [checkins, setCheckins] = useState([]);
  const [page, setPage] = useState(1);
  const [waiting, setWaiting] = useState(false);

  const studenId = useSelector(state => state.persist.student.id);
  const loading = useSelector(state => state.persist.loading);

  async function loadCheckins(id) {
    if (waiting) return;

    setWaiting(true);

    const response = await api.get(`students/${id}/checkins?page=${page}`);

    const checkParsed = response.data.map(checkin => ({
      ...checkin,
      dateParsed: formatRelative(parseISO(checkin.createdAt), new Date(), {
        locale: pt,
        addSuffix: true,
      }),
    }));

    setCheckins([...checkins, ...checkParsed]);
    setPage(page + 1);

    if (response.data.length > 0) {
      setWaiting(false);
    }
  }

  useEffect(() => {
    loadCheckins(studenId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit() {
    try {
      const response = await api.post(`students/${studenId}/checkins`);

      const checkParsed = [
        {
          ...response.data,
          dateParsed: formatRelative(
            parseISO(response.data.createdAt),
            new Date(),
            {
              locale: pt,
              addSuffix: true,
            },
          ),
        },
        ...checkins,
      ];

      setCheckins(checkParsed);
      console.tron.log(error.message);
    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        Alert.alert('O estudante já realizaou 5 check-ins esta semana!');
      }
    }
  }

  return (
    <View>
      <Header />
      <Container>
        <Form>
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Novo check-in
          </SubmitButton>
        </Form>

        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          onEndReached={() => loadCheckins(studenId)}
          onEndReachedThreshold={0.1}
          renderItem={({item}) => (
            <CheckIn>
              <Left>{`Check-in #${item.id}`}</Left>
              <CheckDate>{item.dateParsed}</CheckDate>
            </CheckIn>
          )}
        />
      </Container>
    </View>
  );
}

CheckIns.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
