import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {TouchableOpacity, Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Form, TextArea, SubmitButton} from './styles';
import Header from '~/components/Header';

import api from '~/services/api';

export default function NewHelp() {
  const studenId = useSelector(state => state.persist.student.id);
  const [question, setQuestion] = useState('');

  const loading = useSelector(state => state.persist.loading);

  async function handleSubmit() {
    try {
      await api.post(`students/${studenId}/help-orders`, {
        question,
      });
      Alert.alert('Pedido enviado com sucesso!');
    } catch (err) {
      Alert.alert('Falha ao enviar o pedido!');
    }
    setQuestion('');
  }

  return (
    <View>
      <Header />
      <Container>
        <Form>
          <TextArea
            multiline
            numberOfLines={15}
            placeholder="Inclua seu pedido de auxílio"
            value={question}
            onChangeText={setQuestion}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Enviar pedido
          </SubmitButton>
        </Form>
      </Container>
    </View>
  );
}

NewHelp.navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
