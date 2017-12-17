import React from 'react';
import Top from './top'
import Detail from './detail';
import WideLogo from './wide-logo';

import styles from './card.css'

const Body = (props) => {

  const divStyle = {
    paddingTop: '.625rem',
    height: '100%'

  };
  const whatStyle = {
    display: 'flex',
    flexDirection: props.direction || 'row'
  };

  return (
    <div style={whatStyle}>
      <Top {...props}/>
      <Detail {...props}/>
      <WideLogo logo={props.logo}/>
    </div>
  )
}

export default Body
