import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './applications.css';
import {Cardu} from '../biscuits/index.js';
import {CardDesigner} from '../utils/card-designer'

class Applications extends React.Component  {

  render (){
    console.log("G")

    let display
    this.props.location.pathname === '/' ?
      display = 'flex' :
      display = 'none'
    
    const style = {
      general: {
        display: display
      }
    }

    // const cards = cardDesigner(this.props.applications)

    
    return(
      <div className={styles.grid} style={style.general}>
        {this.props.applications.length > 0 ?
          this.props.applications.map((project,i) => <Cardu key={i} card={project}/>)
         : null
         }
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return ({
      applications: state.applications,
    })
}

export default connect(mapStateToProps, null )(Applications);
