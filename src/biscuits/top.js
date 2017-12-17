import React from 'react';
var classNames = require('classnames');

const Top = (props) => {

  var divStyle = {
    borderColor: props.color,
    borderWidth: 0,
    borderBottomWidth: '1px',
    marginBottom: '.625rem',
    paddingBottom: 0,
    minHeight: 12,
    marginTop: '0.75rem'
  };

  var textStyle = {
    fontSize: '0.85rem',
    marginBottom: '.3rem'
  };

  return (
    <div style={divStyle}>
      <p style={textStyle}>{props.description}</p>
    </div>
  )
};

export default Top