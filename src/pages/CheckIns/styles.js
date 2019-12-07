import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  padding: 20px;
  background: #f5f5f5;
  display: flex;
  height: 100%;
`;

export const Form = styled.View``;

export const SubmitButton = styled(Button)``;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginTop: 15,
    paddingBottom: 125,
  },
})``;

export const CheckIn = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  border: solid 1px #d8d8d8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 65px;
`;

export const Left = styled.Text`
  color: #464646;
  font-weight: bold;
  font-size: 16px;
`;

export const CheckDate = styled.Text`
  color: #727272;
  font-size: 16px;
  max-width: 50%;
  text-align: right;
`;
