import React from "react";

import "./panel.style.css";

import PropTypes from 'prop-types';

const Panel = (props) => {
  const {className, children, ...rest } = props;

  return (
    <div className={className + " panelStyle"} {...rest}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  className: PropTypes.string
}

Panel.defaultProps = {
  className: ""
}


export default Panel;
