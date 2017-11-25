'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';

import ReactCountdownClock from 'react-countdown-clock';

import Arsenal from '../../../images/Arsenal.png';
import Tottenham from '../../../images/Tottenham.png';


class MatchStatistics extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let self = this;

    let matchStatistics = self.props.matchStatistics;
    let incidents;
    let aTeam='', bTeam='', currentScore='0 - 0', incidentList = [];

    if (matchStatistics !== undefined){
        aTeam = matchStatistics.aTeam;
        bTeam = matchStatistics.bTeam;
        currentScore = matchStatistics.currentScore;
    }

    let incidentLists = self.props.incidentList;

    if (incidentLists !== undefined){

        incidents = incidentLists.map(function(incident){
            return (
                <Row nogutter className={ styles.rowStyle }>
                    <Col nogutter md={4} className={ styles.right }>{incident.aTeam}</Col>
                    <Col nogutter md={4} className={ styles.center }>{incident.minute}'</Col>
                    <Col nogutter md={4} className={ styles.left }>{incident.bTeam}</Col>
                </Row>);
        });
    }

    return (
     <div className={styles.statisticBoard} >
         <Container nogutter fluid style={{ padding: '0px', fontFamily: 'Roboto'  }}>
             <Row nogutter style={{ padding:'20px 0' }}>
                 <Col nogutter md={2} style={{ paddingLeft: '10px'}}>
                     <Row nogutter className={ styles.time }>
                         <ReactCountdownClock seconds={5400}
                                              color="white"
                                              alpha={1}
                                              font="Roboto"
                                              fontSize={20}
                                              paused={false}
                                              size={80} />
                     </Row>
                 </Col>
                 <Col nogutter md={10} className={styles.teamScore}>
                 <Row>
                     <Col nogutter md={4}>
                         <img src={Arsenal} style= {{ height: '80px', float: 'right', marginRight: '40px' }} />
                     </Col>
                     <Col nogutter md={4}>
                         {currentScore}
                     </Col>
                     <Col nogutter md={4}>
                         <img src={Tottenham} style= {{ height: '80px', float: 'left' }} />
                     </Col>
                 </Row>
                 </Col>
             </Row>
             <Row nogutter>
                 <Col nogutter md={2}>
                 </Col>
                 <Col nogutter md={10}>
                     {incidents}
                 </Col>
             </Row>
       </Container>
     </div>);
  }
}

export default branch({
    matchStatistics: ['matchStatistics'],
    incidentList: ['incidentList']
    }, MatchStatistics);