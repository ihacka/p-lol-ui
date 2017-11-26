'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';

import ProfileImage from '../../../images/ProfilePic.png';
import ProfileImage2 from '../../../images/ProfilePic2.png';
import ProfileImage3 from '../../../images/ProfilePic3.png';
import ProfileImage4 from '../../../images/ProfilePic4.png';
import ProfileImage5 from '../../../images/ProfilePic5.png';


class ProfileCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let self = this;

    let userDetails = self.props.userDetails;
    let image, position='', name = '', amount= '0', optAmount='0', openBets='0', potWins= '0', cards= '0', color= 'blue';

    if (userDetails !== undefined){
        position = userDetails.position;
        name = userDetails.name;
        amount= userDetails.amount;
        optAmount= userDetails.optAmount;
        openBets= userDetails.openBets;
        potWins= userDetails.potWins;
        cards= userDetails.cards;
        borderColor=userDetails.borderColor;
        switch (userDetails.image){
            case "1": image = ProfileImage; break;
            case "2": image = ProfileImage2; break;
            case "3": image = ProfileImage3; break;
            case "4": image = ProfileImage4; break;
            case "5": image = ProfileImage5; break;
        }
    }

    let borderColor = { borderColor: borderColor, position: 'relative' };
    let firstRow = { paddingLeft: '35%', fontSize: '8px', lineHeight: '12px', paddingTop: '10px', paddingBottom: '0px' };
    let secondRow = { borderBottom: '2px solid #999', margin: '0 5% 0 35%', fontSize: '16px', lineHeight: '20px', paddingTop: '5px', paddingBottom: '10px'};
    let thirdRow = { borderBottom: '2px solid #999', margin: '0 5%', padding: '0 0 0 30%', fontSize: '14px', lineHeight: '20px', paddingTop: '10px',  paddingBottom: '10px'};
    let fourthRow = { textAlign: 'center' , borderBottom: '2px solid #999', margin: '0 5%', fontSize: '14px', lineHeight: '20px', paddingTop: '10px',  paddingBottom: '10px'};
    let fifthRow = { textAlign: 'center', fontSize: '12px', paddingTop: '10px' };

    return (
     <div className={styles.card} style={ borderColor }>
         <img src={ image } style= {{ position: 'absolute', zIndex: '10', width: '110px', left: '-45px' }} />
         <Container nogutter fluid style={{ padding: '0px', fontFamily: 'Roboto'  }}>
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
    }, ProfileCard);