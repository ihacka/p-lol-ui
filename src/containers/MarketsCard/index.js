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
    let x12 = ["1","X","2"];
    let totalGoals = ["0","1","2+"];
    return (
         <Col nogutter md={12}>
             <Row>
                 <Market id="111" title="Full time Result" markets={x12} />
                 <Market id="112" title="1ST HALF - 1X2" markets={x12}/>
                 <Market id="113" title="DOUBLE CHANCE" markets={x12} />
             </Row>
             <Row>
                 <Market id="114" title="1ST HALF - CORRECT SCORE" markets={x12} />
                 <Market id="115" title="2ND HALF - 1X2" markets={x12}/>
                 <Market id="116" title="1ST HALF - TOTAL GOALS" markets={totalGoals} />
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