'use strict';

import Baobab from 'baobab';

class StateManager {
    constructor() {
        this._tree = new Baobab({
            bets:{

            },
            account: {
                name: 'Nikos Tsiftis',
                amount: '123123$',
                optAmount: '210$',
                openBets: '4',
                potWins: '2000$',
                cards: '3',
                borderColor: 'yellow'
            },
            colors: ['yellow', 'blue', 'orange'],
            matchStatistics: {
                aTeam: 'Arsenal',
                bTeam: 'Barca',
                currentScore: '0 - 0'
            },
            // incidentList: [
            //     { aTeam: '', minute: '33', bTeam: 'Goal Keane' },
            //     { aTeam: '', minute: '28', bTeam: 'Corner Kick' },
            //     { aTeam: 'Cazorla Faul', minute: '27', bTeam: '' },
            //     { aTeam: '', minute: '25', bTeam: 'Free Kick' },
            //     { aTeam: 'Cazorla Goal', minute: '23', bTeam: '' },
            //     { aTeam: '', minute: '20', bTeam: 'Corner Kick' }
            // ],
            incidentList: [
                { aTeam: '', minute: '0', bTeam: '' },
                { aTeam: '', minute: '0', bTeam: '' },
                { aTeam: '', minute: '0', bTeam: '' },
                { aTeam: '', minute: '0', bTeam: '' },
                { aTeam: '', minute: '0', bTeam: '' },
                { aTeam: '', minute: '0', bTeam: '' }
            ],
            leaderBoard: [
                {
                    position: '1st',
                    name: 'Xaris Xalis',
                    amount: '123123 $',
                    optAmount: '210 $',
                    openBets: '4',
                    potWins: '2000 $',
                    cards: '3',
                    borderColor: 'yellow',
                    image: '1'
                },
                {
                    position: '2nd',
                    name: 'Nikos Kontos',
                    amount: '123123 $',
                    optAmount: '210 $',
                    openBets: '4',
                    potWins: '2000 $',
                    cards: '5',
                    borderColor: 'blue',
                    image: '2'
                },
                {
                    position: '3rd',
                    name: 'Manos Kounelos',
                    amount: '12355 $',
                    optAmount: '150 $',
                    openBets: '4',
                    potWins: '2000 $',
                    cards: '3',
                    borderColor: 'red',
                    image: '3'
                },
                {
                    position: '4th',
                    name: 'Eleni Marida',
                    amount: '33333 $',
                    optAmount: '10 $',
                    openBets: '2',
                    potWins: '2000 $',
                    cards: '1',
                    borderColor: 'white',
                    image: '4'
                },
                {
                    position: '5th',
                    name: 'Andreas Katakouzinos',
                    amount: '22222$',
                    optAmount: '5 $',
                    openBets: '6',
                    potWins: '2000 $',
                    cards: '1',
                    borderColor: 'white',
                    image: '5'
                }]
        });
    }

    getStore() {
        return this._tree;
    }
}

let instance = new StateManager();

export default instance;