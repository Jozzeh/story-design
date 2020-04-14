import React from 'react';
import PropTypes from 'prop-types';
import { Platform, TouchableOpacity, TouchableHighlight } from 'react-native';

import style from './style';

export default function Button({ onPress, children }) {
  if(Platform.OS === 'ios') {
    return <TouchableHighlight style={style.btn} onPress={onPress}>{children}</TouchableHighlight>;
  } else {
    return <TouchableOpacity style={style.btn} onPress={onPress}>{children}</TouchableOpacity>;
  }
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
