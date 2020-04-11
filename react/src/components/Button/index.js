import React from "react";

import "./button.style.css";

import PropTypes from 'prop-types';

const Button = (props) => {
  const {className, children, ...rest } = props;

  return <button className={className + " buttonStyle"} {...rest}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Button.defaultProps = {
  className: ""
}


export default Button;