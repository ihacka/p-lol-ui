import Baobab from 'baobab';

const tree = new Baobab({
    colors: ['yellow', 'blue', 'orange'],
    matchStatistics:[],
    leaderBoard: [
    {
        position: '1st',
        name: 'Xaris Kattas',
        amount: '123123$',
        optAmount: '210$',
        openBets: '4',
        potWins: '2000$',
        cards: '3',
        borderColor: 'yellow'
    },
    {
        position: '2nd',
        name: 'alekos Kattas',
        amount: '123123$',
        optAmount: '210$',
        openBets: '4',
        potWins: '2000$',
        cards: '5',
        borderColor: 'blue'
    },
    {
        position: '3rd',
        name: 'Manos Kattas',
        amount: '12355$',
        optAmount: '150$',
        openBets: '4',
        potWins: '2000$',
        cards: '3',
        borderColor: 'red'
    },
    {
        position: '4th',
        name: 'Eleni Kattas',
        amount: '33333$',
        optAmount: '10$',
        openBets: '2',
        potWins: '2000$',
        cards: '1',
        borderColor: 'white'
    },
    {
        position: '5th',
        name: 'Andreas Vlachos',
        amount: '22222$',
        optAmount: '5$',
        openBets: '6',
        potWins: '2000$',
        cards: '1',
        borderColor: 'white'
    }]
});

export default tree;