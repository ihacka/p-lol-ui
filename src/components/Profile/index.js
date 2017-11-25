'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';

import ProfileImage from '../../../images/ProfilePic.png';

class Profile extends Component {
  constructor(props){
    super(props);
      if (props.input !== 'undefined') {
          console.log(props.input);
      }
  }

  render() {
    let self = this;

    let userDetails = self.props.userDetails;
    let position='', name = '', amount= '0', optAmount='0', openBets='0', potWins= '0', cards= '0', color= 'blue';

    if (userDetails !== undefined){
        position = userDetails.position;
        name = userDetails.name;
        amount= userDetails.amount;
        optAmount= userDetails.optAmount;
        openBets= userDetails.openBets;
        potWins= userDetails.potWins;
        cards= userDetails.cards;
        borderColor=userDetails.borderColor;
    }

    let borderColor = { borderColor: borderColor, position: 'relative' };
    let firstRow = { paddingLeft: '35%', fontSize: '8px', lineHeight: '12px', paddingTop: '10px', paddingBottom: '0px' };
    let secondRow = { borderBottom: '2px solid #999', margin: '0 5% 0 35%', fontSize: '16px', lineHeight: '20px', paddingTop: '5px', paddingBottom: '10px'};
    let thirdRow = { borderBottom: '2px solid #999', margin: '0 5%', padding: '0 0 0 30%', fontSize: '14px', lineHeight: '20px', paddingTop: '10px',  paddingBottom: '10px'};
    let fourthRow = { textAlign: 'center' , borderBottom: '2px solid #999', margin: '0 5%', fontSize: '14px', lineHeight: '20px', paddingTop: '10px',  paddingBottom: '10px'};
    let fifthRow = { textAlign: 'center', fontSize: '12px', paddingTop: '10px' };

    return (
     <div className={styles.card} style={ borderColor }>
         <Container fluid style={{ padding: '0px', fontFamily: 'Roboto'  }}>
             <Row style={{ backgroundColor: '#2f9fff', height:'35px', lineHeight: '35px', textAlign: 'right' }}>
                 <Col md={12}>Logout</Col>
             </Row>
             <Row style={{ backgroundColor: 'blue' }}>
                 <img src={ProfileImage} style= {{ width: '110px' }} />
             </Row>
             <Row nogutter style={ firstRow }>
                 { position }
             </Row>
             <Row nogutter style={ secondRow }>
                 { name }
             </Row>
             <Row nogutter style={ thirdRow }>
                 BANK: <br /> { amount }
             </Row>
             <Row nogutter style={ fourthRow }>
               <Col nogutter md={4}>OPT AMT<br />{ optAmount }</Col>
               <Col nogutter md={4}>OPN BETS<br />{ openBets }</Col>
               <Col nogutter md={4}>POT. WINS<br /> { potWins } </Col>
             </Row>
             <Row nogutter style={ fifthRow }>
               <Col nogutter md={12}>CARDS: * * * * *</Col>
             </Row>
          </Container>
     </div>);
  }
}

export default branch({
        colors: ['colors']
    }, Profile);