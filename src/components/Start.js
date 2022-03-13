import React, {Component, useState} from 'react';

const Start = (props) => {
    const [name, setName] = useState('');
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: ''
    //     }
    // }


        return (
            <div>
                <h1>Ready for war</h1>
                <input
                    onChange={e => setName(e.target.value)}
                    type='text'
                    placeholder='Enter your name'/>
                <button onClick={() => props.changePage('Game', name)}>Start</button>
            </div>
        );

}

export default Start;