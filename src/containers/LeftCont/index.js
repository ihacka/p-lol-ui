'use strict'

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import styles from './style.css';

import ProfileCard from '../../components/ProfileCard/index.js';

class LeftCont extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let leaderBoards = this.props.leaderBoard;
    let leaderBoardList;

    if (leaderBoards !== undefined){
        leaderBoardList = leaderBoards.map(function(leaderBoard){
          return <ProfileCard userDetails={leaderBoard} />;
        });
    }

    return (
     <div className={styles.background}>
        <div className={styles.title}>Leaderboard</div>
         <div style={{ padding: '50px 0 0 50px' }}>
             {leaderBoardList}
         </div>
      </div>);
  }
}

export default branch({
    leaderBoard: ['leaderBoard']
            }, LeftCont);