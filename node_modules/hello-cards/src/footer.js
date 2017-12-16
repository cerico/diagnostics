import React from 'react';

const Footer = (props) => {

  const colourStyle = {
    borderColor: props.color,
    borderStyle: 'solid',
    borderTopWidth: '1px'
  };

  const urlStyle = {
    marginTop: '0.5rem',
    float: 'right',
    fontSize: '0.74rem',
    fontFamily: 'roboto'
  };

  return(
    <div style={colourStyle}>
      <p style={urlStyle}>{props.url}</p>
     </div>
  )
};

export default Footer