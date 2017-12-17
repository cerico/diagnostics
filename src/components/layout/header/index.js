
import React, { Component } from 'react';
import styles from './header.css';

const classNames = require('classnames');

const Header = () => {

	const leftCorner = classNames(styles.leftCorner, styles.box)
  const rightCorner = classNames(styles.rightCorner, styles.box)
  
  const yes = {
    "padding": "36px 120px 120px"
  }
  const navItem = {
    fontFamily: 'raleway',
    display: 'inline-block',
    paddingLeft: '1.38889%',
    paddingRight: '1.38889%',
  }

  const navItems = {
    textAlign: 'right',
    marginLeft: '-1.38889%',
    marginRight:'-1.38889%',
  }

  const colHeader = {
    width: '83.33333%',
  }

  const flex = {
    display:'flex'
  }
  const bar = {
    width:'90%'
  }

	return (
		<header style={flex}>
        <div style={bar}>
          <nav>
            <ul style={navItems}>
              <li style={navItem}>
                <a href="/">diagnostics</a>
              </li>
              <li style={navItem}>
                <a href="/about">about</a>
              </li>
            </ul>
          </nav>
        </div>
    </header>

	);

}

export default Header;