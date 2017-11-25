'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';
import Market from '../../components/Market/index.js'
import Card from '../../components/Card/index.js'

class MarketsCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let self = this;
    return (
         <Col nogutter md={12}>
             <Row>
                 <Market />
                 <Market />
                 <Market />
             </Row>
             <Row>
                 <Market />
                 <Market />
                 <Market />
             </Row>
             <Row>
                 <Market />
                 <Market />
                 <Market />
             </Row>
             <Row nogutter>
                 <Col nogutter md={12}>
                     <Row>
                         <Col nogutter md={12}>
                             <Card whichCard="1" />
                             <Card whichCard="2"/>
                             <Card whichCard="3" />
                             <Card whichCard="4"/>
                             <Card whichCard="4" />
                         </Col>
                     </Row>
                 </Col>
             </Row>
         </Col>
     );
  }
}

export default branch({
        colors: ['colors']
    }, MarketsCard);