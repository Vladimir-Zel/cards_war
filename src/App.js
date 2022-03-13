import React, {Component, useState} from 'react';
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";

const App = () => {
    const [page, setPage] = useState('Start');
    const [name, setName] = useState('You');
    const [compWins, setCompWins] = useState(0);
    const [playerWins, setPlayerWins] = useState(0);
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         page: 'Start',
    //         name: 'You',
    //         compWins: 0,
    //         playerWins: 0
    //     }
    // }

    const changePage = (page, ...args) => {
        switch (args.length) {
            // case 0:
            //    // setPage(page);
            //     break;
            case 1:
                // setPage(page);
                setName(args[0]);
                break;
            case 2:
                // setPage(page);
              setCompWins(args[0]);
              setPlayerWins(args[1]);
        }
        setPage(page);
    }


        switch (page) {
            case 'Game':
                return <Game
                    changePage={changePage}
                    name={name}/>;
            case 'Result':
                return <Result
                    changePage={changePage}
                    compWins={compWins}
                    playerWins={playerWins}/>
            default:
                return <Start changePage={changePage}/>
        }
}

export default App;