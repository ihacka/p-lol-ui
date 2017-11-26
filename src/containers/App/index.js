'use strict'

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {Container, Row, Col } from 'react-grid-system';
import YoutubePlayer from 'react-youtube-player';

import {root} from 'baobab-react/higher-order';
import tree from '../../state.js';

import LeftCont from '../LeftCont/index.js';
import MatchStatistics from '../../components/MatchStatistics/index.js';
import Profile from '../../components/Profile/index.js';
import MarketsCard from '../../containers/MarketsCard/index.js'
import BetColumn from '../../components/BetColumn/index.js'

import styles from './style.css';

class App extends Component {
  constructor(props){
    super(props);
  }

    shouldComponentUpdate(nextProps, nextState){
        let self = this;
        return (nextProps!==self.props || nextState !==self.state)
    }

  render() {

      return (
        <Container nogutter fluid style={{ padding: '0px' }}>
            <Row nogutter>
                <Col md={2}>
                    <LeftCont />
                </Col>
                <Col nogutter md={8}>
                    <Row nogutter style={{ backgroundColor: '#000', height: '400px'}}>
                        <Col nogutter md={6}>
                            <YoutubePlayer videoId="tcqgIysVQcE" playbackState="unstarted" configuration={{showinfo: 0,controls: 0, size:'large', height:'500px'}}/>
                        </Col>
                        <Col nogutter md={6}>
                            <MatchStatistics />
                        </Col>
                    </Row>
                    <Row nogutter style= {{ backgroundColor: 'black', margin: '0px'}}>
                        <Col nogutter md={12}>
                            <div className={ styles.title }>Arsenal vs Totenham</div>
                        </Col>
                    </Row>
                    <Row nogutter style= {{ backgroundColor: 'black', margin: '0px', paddingRight: '10px'}}>
                       <MarketsCard />
                    </Row>
                </Col>
                <Col nogutter md={2}>
                    <Row>
                        <Profile />
                    </Row>
                    <Row nogutter>
                        <BetColumn />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default root(
    tree, App
)