'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';

import card1 from '../../../images/card1.png';
import card2 from '../../../images/card2.png';
import card3 from '../../../images/card3.png';
import card4 from '../../../images/card4.png';
import card5 from '../../../images/card5.png';
import card6 from '../../../images/card6.png';

class Card extends Component {
  constructor(props){
    super(props);
  }

    mouseOver(card){
        console.log("Mouse over!!!", card);
        this.setState({flipped: true});
    }

  render() {
    let self = this;

      let card;

      switch (self.props.whichCard) {
          case "1": card = card1; break;
          case "2": card = card2; break;
          case "3": card = card3; break;
          case "4": card = card4; break;
          case "5": card = card5; break;
          case "6": card = card6; break;
          default: break;
      }
    return (
        <div className={styles.hovers } onMouseOver={() => self.mouseOver(card)}>
            <img src={card} style= {{ height: '205px', float: 'left' }} />
        </div>
     );
  }
}

export default branch({
        colors: ['colors']
    }, Card);