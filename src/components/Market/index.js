'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';
import {Container, Row, Col } from 'react-grid-system';
import objectAssign from 'object-assign';
import tree from '../../state.js';

import { CSSTransition, transit } from "react-css-transition";

class Market extends Component {
  constructor(props){
    super(props);
      this.state = {};

      this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
      let self = this;
      console.log(self.props.id, this.state);
      return (nextProps!==self.props || nextState !==self.state)
  }

    handleClick(variable, id) {
      let self = this;

      let mpla = (this.state[id + '_' + variable] === undefined) ? true : (this.state[id + '_' + variable]) ? false : true;

      self.setState({
          [id + '_' + variable]: mpla
      });

      console.log(tree.get());
        let bets = { bets: this.state };
      let newTree = objectAssign({}, tree.get(), bets);
      tree.set(newTree);
    }

  render() {
    let self = this;
    let marketsList;
    let id = self.props.id;
    let markets = self.props.markets;

    console.log(markets);

    if (markets !== undefined) {
        marketsList = markets.map(function (market) {
            return (
                <Col nogutter md={4}>
                    <div className={styles.marketButton} onClick={() => self.handleClick(market, id)}>{market}</div>
                </Col>
            );
        });
    }

    return (
        <Col nogutter fluid className={ styles.marketCard}>
            <Row nogutter>
                <Col nogutter md={12} className={ styles.marketTitle }>
                    { self.props.title }
                </Col>
            </Row>
            <Row nogutter className={ styles.marketScore }>
                { marketsList }
            </Row>
        </Col>
     );
  }
}

export default branch({
        bets: ['bets']
    }, Market);