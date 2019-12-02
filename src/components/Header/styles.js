import styled from 'styled-components/native';

export const Container = styled.View.attrs(props => ({
  display: props.signed ? 'flex' : 'none',
}))`
  background: #fff;
  padding: 15px 0;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-top-width: 0;
`;
