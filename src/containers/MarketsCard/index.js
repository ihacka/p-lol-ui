'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';
import Market from '../../components/Market/index.js'
import Card from '../../components/Card/index.js'

import card1 from '../../../images/card1.png';
import card2 from '../../../images/card2.png';
import card3 from '../../../images/card3.png';
import card4 from '../../../images/card4.png';
import card5 from '../../../images/card5.png';
import card6 from '../../../images/card6.png';

import card1_alt from '../../../images/card1_alt.png';
import card2_alt from '../../../images/card2_alt.png';
import card3_alt from '../../../images/card3_alt.png';
import card4_alt from '../../../images/card4_alt.png';
import card5_alt from '../../../images/card5_alt.png';
import card6_alt from '../../../images/card6_alt.png';

class MarketsCard extends Component {
  constructor(props){
    super(props);

    this.state={
        "card1": card1,
        "card2": card2,
        "card3": card3,
        "card4": card4,
        "card5": card5,
        "card6": card6,
    }
  }

    mouseOver(card){
        switch (card) {
            case "1": this.setState({ "card1": card1_alt }); break;
            case "2": this.setState({ "card2": card2_alt }); break;
            case "3": this.setState({ "card3": card3_alt }); break;
            case "4": this.setState({ "card4": card4_alt }); break;
            case "5": this.setState({ "card5": card5_alt }); break;
            case "6": this.setState({ "card6": card6_alt }); break;
        }
    }

    mouseOut(card){
        switch (card) {
            case "1": this.setState({ "card1": card1 }); break;
            case "2": this.setState({ "card2": card2 }); break;
            case "3": this.setState({ "card3": card3 }); break;
            case "4": this.setState({ "card4": card4 }); break;
            case "5": this.setState({ "card5": card5 }); break;
            case "6": this.setState({ "card6": card6 }); break;
        }
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
             <Row nogutter style={{ position: 'fixed', width: '100%', bottom: '0' }}>
                 <Col nogutter md={12}>
                     <Row>
                         <Col nogutter md={12}>
                             <div className={styles.hovers } onMouseOut={() => self.mouseOut("1")} onMouseOver={() => self.mouseOver("1")}>
                                 <img src={self.state.card1} style= {{ height: '205px', float: 'left' }} />
                             </div>
                             <div className={styles.hovers } onMouseOut={() => self.mouseOut("2")} onMouseOver={() => self.mouseOver("2")}>
                                 <img src={self.state.card2} style= {{ height: '205px', float: 'left' }} />
                             </div>
                             <div className={styles.hovers } onMouseOut={() => self.mouseOut("3")} onMouseOver={() => self.mouseOver("3")}>
                                 <img src={self.state.card3} style= {{ height: '205px', float: 'left' }} />
                             </div>
                             <div className={styles.hovers } onMouseOut={() => self.mouseOut("4")} onMouseOver={() => self.mouseOver("4")}>
                                 <img src={self.state.card4} style= {{ height: '205px', float: 'left' }} />
                             </div>
                             <div className={styles.hovers } onMouseOut={() => self.mouseOut("5")} onMouseOver={() => self.mouseOver("5")}>
                                 <img src={self.state.card5} style= {{ height: '205px', float: 'left' }} />
                             </div>
                             <div className={styles.hovers } onMouseOut={() => self.mouseOut("6")} onMouseOver={() => self.mouseOver("6")}>
                                 <img src={self.state.card6} style= {{ height: '205px', float: 'left' }} />
                             </div>
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