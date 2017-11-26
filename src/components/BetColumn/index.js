'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';
import Bet from '../../components/Bet/index.js'
import ProfileImage from '../../../images/ProfilePic.png';

class BetColumn extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let self = this;

    return (
         <Col nogutter md={12} fluid style={{ padding: '0px', fontFamily: 'Roboto'  }}>
             <Row style={{ backgroundColor: '#545556' }}>
                 <Col md={6} className={ styles.title }>Betslip</Col>
                 <Col md={6} className={ styles.title_deactive }>Open Bets</Col>
             </Row>
             <Row style={{ backgroundColor: '#545556', }}>
                 <Col md={12} style={{ color: 'white', padding: '15px' }}>
                    <Bet />
                 </Col>
             </Row>
             <Row style={{ backgroundColor: '#545556', height: '1600px' }}>
                 <Col md={12} style={{ color: 'white', padding: '15px' }}>
                     <div className={ styles.placeBetButton }>Place Bet</div>
                 </Col>
             </Row>
          </Col>
    );
  }
}

export default branch({
        bets: ['bets']
    }, BetColumn);