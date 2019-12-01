import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {Container, TxtInput} from './styles';

function Input({style, icon, ...rest}, ref) {
  return (
    <Container style={style}>
      <TxtInput {...rest} ref={ref} />
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
