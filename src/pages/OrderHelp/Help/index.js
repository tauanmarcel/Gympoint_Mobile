import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

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

function Help({navigation, isFocused}) {
  const [helps, setHelps] = useState([]);
  const [page, setPage] = useState(1);
  const [waiting, setWaiting] = useState(false);

  const studenId = useSelector(state => state.persist.student.id);
  const loading = useSelector(state => state.persist.loading);

  async function loadHelps() {
    if (waiting) return;

    const response = await api.get(
      `help-orders/${studenId}/list-for-student?page=${page}`,
    );

    const helpParsed = response.data.map(help => ({
      ...help,
      dateParsed: formatRelative(parseISO(help.createdAt), new Date(), {
        locale: pt,
        addSuffix: true,
      }),
    }));

    setHelps([...helps, ...helpParsed]);
    setPage(page + 1);
    if (response.data.length > 0) setWaiting(false);
  }

  useEffect(() => {
      loadHelps();
  }, []);

  useEffect(() => {
    if(isFocused){
      reloadHelps(isFocused);
    }    
  }, [isFocused]);

  
  async function reloadHelps(){
    setHelps([]);
    const response = await api.get(
      `help-orders/${studenId}/list-for-student?page=${1}`,
    );
    const helpParsed = response.data.map(help => ({
      ...help,
      dateParsed: formatRelative(parseISO(help.createdAt), new Date(), {
        locale: pt,
        addSuffix: true,
      }),
    }));

    console.tron.log(helpParsed);

    setHelps(helpParsed);
  }

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
          onEndReached={loadHelps}
          enEndReachedThreshold={0.1}
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

export default withNavigationFocus(Help);