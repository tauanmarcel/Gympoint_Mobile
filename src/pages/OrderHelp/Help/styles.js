import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  padding: 20px;
  background: #f5f5f5;
  display: flex;
  height: 100%;
`;

export const Form = styled.View``;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {marginTop: 15},
})``;

export const AnswerContent = styled(TouchableOpacity)`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  border: solid 1px #d8d8d8;
  display: flex;
`;

export const Status = styled.View`
  flex-direction: row;
`;

export const TxtStatus = styled.Text`
  color: ${props => (props.answer ? '#36bf55' : '#727272')};
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;
`;

export const AnswerDate = styled.Text`
  color: #727272;
  font-size: 16px;
`;

export const Content = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Answer = styled.Text`
  color: #727272;
  font-size: 16px;
`;

export const Prev = styled(TouchableOpacity)``;
