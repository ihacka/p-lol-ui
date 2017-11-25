'use strict'

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

class RightCont extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
     <div styleName='header'>
        Right Container
      </div>);
  }
}

export default CSSModules(RightCont, styles);