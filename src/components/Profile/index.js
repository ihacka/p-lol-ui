'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';

import ProfileImage from '../../../images/ProfilePic.png';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let self = this;

    let account = self.props.account;
    let position='', name = '', amount= '0', optAmount='0', openBets='0', potWins= '0', cards= '0', color= 'blue';

    if (account !== undefined){
        position = account.position;
        name = account.name;
        amount= account.amount;
        optAmount= account.optAmount;
        openBets= account.openBets;
        potWins= account.potWins;
        cards= account.cards;
    }

    let firstRow = { fontSize: '12px', lineHeight: '12px', paddingTop: '10px', paddingBottom: '0px' };
    let secondRow = {  fontSize: '16px', lineHeight: '20px', paddingTop: '5px', paddingBottom: '10px'};
    let thirdRow = { borderBottom: '1px solid #fff',fontSize: '14px', paddingTop: '2px',  paddingBottom: '2px'};
    let fourthRow = { textAlign: 'center' , fontSize: '14px', paddingTop: '2px',  paddingBottom: '2px'};
    let fifthRow = { textAlign: 'center', fontSize: '12px', paddingTop: '10px' };

    return (
         <Col nogutter md={12} fluid style={{ padding: '0px', fontFamily: 'Roboto'  }}>
             <Row style={{ backgroundColor: '#00B9EE', height:'35px', lineHeight: '35px', textAlign: 'right', paddingRight: '10px' }}>
                 <Col md={12} style={{ color: 'white' }}>Logout</Col>
             </Row>
             <Row style={{ backgroundColor: '#004899' }}>
                 <Col nogutter md={4}>
                     <img src={ProfileImage} style= {{ width: '100px', height: '100px', position: 'absolute', padding:'5px' }} />
                 </Col>
                 <Col nogutter md={8} style={{ color: 'white', paddingLeft: '15px' }}>
                     <Row nogutter style={ firstRow }>
                         My stats:
                     </Row>
                     <Row nogutter style={ secondRow }>
                         { name }
                     </Row>
                     <Row nogutter style={ thirdRow }>
                         BANK: { amount }
                     </Row>
                     <Row nogutter style={ fourthRow }>
                         OPT AMT { optAmount }
                     </Row>
                     <Row nogutter style={ fourthRow }>
                         OPN BETS { openBets }
                     </Row>
                     <Row nogutter style={ fourthRow }>
                         POT. WINS { potWins }
                     </Row>
                 </Col>
             </Row>
          </Col>
    );
  }
}

export default branch({
        account: ['account']
    }, Profile);