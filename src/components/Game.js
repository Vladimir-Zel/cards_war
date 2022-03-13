import React, {Component, useEffect, useState} from 'react';

let compWins;
let playerWins;
let compCards;
let playerCards;

const Game = props => {
    const [compCard, setCompCard] = useState('Computer card');
    const [playerCard, setPlayerCard] = useState('Player card');
    // const [compWins, setCompWins] = useState(0);
    // const [playerWins, setPlayerWins] = useState(0);

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         compCard: 'Computer card',
    //         playerCard: 'Player card',
    //         compWins: 0,
    //         playerWins: 0
    //     }
    // }

    useEffect(() => {
        const deck = [];
        const suits = ['spade', 'club', 'diamond', 'heart'];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 2; j <= 14; j++) {
                deck.push({suit: suits[i], rank: j});
            }
        }
        shuffle(deck);

        compCards = deck.slice(0, deck.length / 2);
        playerCards = deck.slice(deck.length / 2, deck.length);
        compWins=0;
        playerWins=0;
        console.log(compCard.length, playerCard.length)

        //unmount
        return () => console.log('Component Game is "unmounted"');

    }, []);


    const handleClickNext = () => {
        if (compCards.length) {

            // const compCards = [...this.state.compCards];
            // const playerCards = [...this.state.playerCards];

            const compCard = compCards.pop();
            const playerCard = playerCards.pop();

            // let compWins = this.state.compWins;
            // let playerWins = this.state.playerWins;

            if (compCard.rank > playerCard.rank) {
                compWins++;
            }
            if (compCard.rank < playerCard.rank) {
                playerWins++;
            }
            setPlayerCard(`${playerCard.rank}, ${playerCard.suit}`);
            setCompCard(`${compCard.rank}, ${compCard.suit}`);

            // this.setState({
            //     playerCards: playerCards, compCards, compWins, playerWins,
            //     playerCard: `${playerCard.rank}, ${playerCard.suit}`,
            //     compCard: `${compCard.rank}, ${compCard.suit}`
            // })
        } else {
            props.changePage('Result', compWins, playerWins);
        }
    }

    return (
        <div>
            <h1>Computer</h1>
            <h2>{compCard}</h2>
            <h2>{playerCard}</h2>
            <h1>{props.name}</h1>
            <button onClick={handleClickNext}>Next</button>
        </div>
    );
}

function shuffle(array) {
    // array.sort(() => Math.random() -0.5);
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default Game;