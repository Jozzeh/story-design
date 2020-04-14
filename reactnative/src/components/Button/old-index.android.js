import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';

import style from './style';

export default function Button({ onPress, children }) {
  return <TouchableNativeFeedback style={style.btn} onPress={onPress}>{children}</TouchableNativeFeedback>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
