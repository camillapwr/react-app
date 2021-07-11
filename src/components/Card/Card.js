import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
 static propTypes = {
   title: PropTypes.string.isRequired,
   //key: PropTypes.number.isRequired,
 }

 render(){
   return (
     <section className={styles.component}>
       <h3 className={styles.title}></h3>
     </section>
   );
 }
}
export default Card;