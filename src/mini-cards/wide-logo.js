import React from 'react';

var classNames = require('classnames');

const WideLogo = (props) => {

    var imgStyle = {
      backgroundImage: 'url(\'' + props.logo + '\')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%'
    };
    var divStyle = {
      display: 'inline-block',
      position: 'relative',
      height: '174px',
      marginLeft: '10px'
    };

    return (
      <div style={divStyle}>
        <div style={imgStyle}/>
      </div>
    )
};

export default WideLogo