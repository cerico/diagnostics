import React from 'react';
import CardBody from './body';
import Header from './header';
import Footer from './footer';
import styles from './card.css'


const Cardu = (props) => {

  const internalExternal = () => {

    const cardStyle = {
      background: props.background,
      color: props.color      
    };

    if (props.url) {
      return <a href={props.url} className={styles.card} style={cardStyle}>{innerCard()}</a>
    }
    return null
  }

  const innerCard = () => {
    const inner = {
      height: '18.125rem',
      paddingBottom: '1.25rem',
      paddingTop: '2.25rem',
      position: 'relative'
    };
    return <div style={inner}>
      <Header {...props}/>
      {showData()}
      <Footer {...props}/>
    </div>
  }

  const showData = () =>{
   return (<CardBody {...props}/>)
  }

  return internalExternal()
}

export default Cardu