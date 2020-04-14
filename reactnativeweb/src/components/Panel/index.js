import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

export default function Panel({ children }) {
  return <View style={style.main}>{children}</View>;
}

Panel.defaultProps = {
  children: null,
};

Panel.propTypes = {
  children: PropTypes.node,
};
