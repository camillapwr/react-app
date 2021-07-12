import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator.js';
//import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from './Icon';
 
class Column extends React.Component {
    
    static propTypes = {
      title: PropTypes.string,
      //key: PropTypes.number,
      icon: PropTypes.node,
      cards: PropTypes.array,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const {title, icon} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </h3>
          {/*
          <div className={styles.cards}>
            {this.state.cards.map(({key, ...cardProps}) => (
              <Card key={key} {...cardProps} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
            */}
        </section>
      );
    }
}
    
export default Column;