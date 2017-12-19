import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './applications.css';
import Card from 'hello-cards';
import {CardDesigner} from '../utils/card-designer'

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

    // const cards = cardDesigner(this.props.applications)

    
    return(
      <div className={styles.grid} style={style.general}>
        {this.props.applications.length > 0 ?
          this.props.applications.map((app,i) => <Card key={i} product={app}/>)
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
