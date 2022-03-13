import React from 'react';

const Result = props => {
    const getResult = () => {
        if (props.playerWins > props.compWins) {
            return 'WIN';
        }
        if (props.playerWins < props.compWins) {
            return 'LOSE';
        }
        return 'DRAW';
    };
    return (
        <div>
            <h1>{getResult()}</h1>
            <h2>{props.playerWins} - {props.compWins}</h2>
            <button onClick={() => props.changePage('Game')}>Again</button>
        </div>
    );
};

export default Result;