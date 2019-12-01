import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  border-radius: 4px;
  border: solid #e5e5e5 2px;
  flex-direction: row;
  align-items: center;
`;

export const TxtInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(150,150,150, 0.5)',
  fontWeight: 'bold',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: rgba(150, 150, 150, 0.8);
`;
