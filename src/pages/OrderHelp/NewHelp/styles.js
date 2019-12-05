import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  padding: 50px 20px 20px
  background: #f5f5f5;
  display: flex;
  height: 100%;
`;

export const Form = styled.View``;

export const TextArea = styled.TextInput`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  border: solid 1px #d8d8d8;
`;

export const SubmitButton = styled(Button)``;
