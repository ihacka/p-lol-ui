'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';


class BetColumn extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let self = this;

    return (
        <Row nogutter className={ styles.bet }>
            <Col nogutter md={1} style={{ borderRight: '1px solid #ccc', cursor: 'pointer', lineHeight:'66px' }}>X</Col>
            <Col nogutter md={11} style= {{ padding: '5px' }} >
                <Row nogutter className={ styles.team}>
                    <Col nogutter md={8} style= {{ textAlign: 'left' }} >Arsenal</Col>
                    <Col nogutter md={4} style= {{ textAlign: 'right' }} >1,73</Col>
                </Row>
                <Row nogutter className={ styles.matchWinner}>
                    <Col nogutter md={12} >Match Winner</Col>
                </Row>
                <Row nogutter>
                    <Col nogutter md={12} >
                        <input type="number" placeholder="Stake" style={{ borderRadius:'5px', color: '#000',  }} />
                    </Col>
                </Row>
            </Col>
         </Row>
    );
  }
}

export default branch({
        bets: ['bets']
    }, BetColumn);