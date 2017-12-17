import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar';
import styles from './layout.css';
import Header from './header';

class Layout extends Component {

  constructor() {
    super();
  }

  render() {
    console.log(this.props)
    return (
      <div className={styles.container}>
          <Sidebar sideText={this.props.sideText}/>
          <Header/>
          {React.cloneElement(this.props.children, this.props)}   
        </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state.sidetext)
  return {
    sideText: state.sidetext,
  }
}

export default  connect(mapStateToProps, null)(Layout);

