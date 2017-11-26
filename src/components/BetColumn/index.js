'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';

import ProfileImage from '../../../images/ProfilePic.png';

class BetColumn extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let self = this;

    return (
         <Col nogutter md={12} fluid style={{ padding: '0px', fontFamily: 'Roboto'  }}>
             <Row style={{ backgroundColor: '#545556', height: '1600px', textAlign: 'right', paddingRight: '10px' }}>
                 <Col md={12} style={{ color: 'white' }}>

                 </Col>
             </Row>
          </Col>
    );
  }
}

export default branch({
        colors: ['colors']
    }, BetColumn);