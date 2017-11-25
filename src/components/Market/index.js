'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';

class Market extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let self = this;
    return (
        <Col nogutter fluid className={ styles.marketCard}>
            <Row nogutter>
                <Col nogutter md={12} className={ styles.marketTitle }>
                    FULL TIME RESULT
                </Col>
            </Row>
            <Row nogutter className={ styles.marketScore }>
                <Col nogutter md={4}>
                    <div className={styles.marketButton}>1</div>
                </Col>
                <Col nogutter md={4}>
                    <div className={styles.marketButton}>X</div>
                </Col>
                <Col nogutter md={4}>
                    <div className={styles.marketButton}>2</div>
                </Col>
            </Row>
        </Col>
     );
  }
}

export default branch({
        colors: ['colors']
    }, Market);