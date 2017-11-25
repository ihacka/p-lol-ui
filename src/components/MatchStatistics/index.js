'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';

class MatchStatistics extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let self = this;

    return (
     <div className={styles.card} >
         <Container nogutter fluid style={{ padding: '0px', fontFamily: 'Roboto'  }}>
             <Row nogutter>
                 <Col nogutter md={4} style={{ paddingLeft: '10px'}}>
                     <Row nogutter>Statistics:</Row>
                     <Row nogutter>35:12</Row>
                 </Col>
                 <Col nogutter md={8} style={{ textAlign: 'center',   }}> team1  1 - 2 team2</Col>
             </Row>
             <Row nogutter>
               <Col nogutter md={4} className={ styles.right }></Col>
               <Col nogutter md={4} className={ styles.center }>33'</Col>
               <Col nogutter md={4} className={ styles.left }>Goal Keane</Col>
             </Row>
             <Row nogutter>
                 <Col nogutter md={4} className={ styles.right }></Col>
                 <Col nogutter md={4} className={ styles.center }>28'</Col>
                 <Col nogutter md={4} className={ styles.left }>Corner kick</Col>
             </Row>
             <Row nogutter>
                 <Col nogutter md={4} className={ styles.right }>Cazorla</Col>
                 <Col nogutter md={4} className={ styles.center }>27'</Col>
                 <Col nogutter md={4} className={ styles.left }></Col>
             </Row>
             <Row nogutter>
                 <Col nogutter md={4} className={ styles.right }></Col>
                 <Col nogutter md={4} className={ styles.center }>27'</Col>
                 <Col nogutter md={4} className={ styles.left }>Free Kick</Col>
             </Row>
             <Row nogutter>
                 <Col nogutter md={4} className={ styles.right }>hello</Col>
                 <Col nogutter md={4} className={ styles.center }>22'</Col>
                 <Col nogutter md={4} className={ styles.left }></Col>
             </Row>
       </Container>
     </div>);
  }
}

export default branch({
    matchStatistics: ['matchStatistics']
    }, MatchStatistics);