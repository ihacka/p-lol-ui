'use strict'

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

class LeftCont extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
     <div styleName='header'>
        Left Container
      </div>);
  }
}

export default CSSModules(LeftCont, styles);