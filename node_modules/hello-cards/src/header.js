import React from 'react';
import styles from './header.css'

const Header = (props) => {

    const colourStyle = {
      borderColor: props.color,
    };

    const textStyle = {
      fontSize: '1.4rem',
      color: props.color,
      marginBottom: '.3rem'
    };

    return (
      <header className={styles.header} style={colourStyle}>
        <div style={textStyle}>{props.name}</div>
      
      </header>
    )
};

export default Header;