import React from 'react';
import CardBody from './body';
import Header from './header';
import Footer from './footer';
import styles from './card.css'


export const Cardu = (props) => {

  const card = props.card;
  console.log(card)

  const internalExternal = () => {

    const cardStyle = {
      background: card.background,
      color: card.color  ,
      height: card.height,    
    };

    if (card.url) {
      console.log("g")
      return <a href={card.url} className={styles.card} style={cardStyle}>{innerCard()}</a>
    }
  }

  const innerCard = () => {
    const inner = {
      height: '18.125rem',
      paddingBottom: '1.25rem',
      paddingTop: '2.25rem',
      position: 'relative'
    };
    return <div style={inner}>
      <Header {...card}/>
      {showData()}
      <Footer {...card}/>
    </div>
  }

  const showData = () =>{
    return (<CardBody {...card}/>)
  }

  return internalExternal()
}
