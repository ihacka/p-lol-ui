'use strict'

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

class MainCont extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
     <div styleName='header'>
        Main Container
      </div>);
  }
}

export default CSSModules(MainCont, styles);