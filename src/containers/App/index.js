'use strict'

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import LeftCont from '../LeftCont/index.js';
import RightCont from '../RightCont/index.js';
import MainCont from '../MainCont/index.js';
import styles from './style.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
     <div styleName='header'>
         <div styleName='left'>
             <LeftCont />
         </div>
         <div styleName='left'>
             <MainCont />
         </div>
         <div styleName='right'>
             <RightCont />
         </div>
      </div>);
  }
}

export default CSSModules(App, styles);