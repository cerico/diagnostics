import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './applications.css';
// import Card from 'hello-cards';

class Applications extends React.Component  {

  render (){
    let display
    this.props.location.pathname === '/' ?
      display = 'flex' :
      display = 'none'
    
    const style = {
      general: {
        display: display
      }
    }
    return(
      <div className={styles.grid} style={style.general}>
        {/* {this.props.applicationsu.length > 0 ? 
          this.props.applications.map((project,i) => <Card key={i} {...project}/>)
          : null
        } */}
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return ({
      applications: state.applications,
    })
}

export default connect(mapStateToProps, null )(Applications);
