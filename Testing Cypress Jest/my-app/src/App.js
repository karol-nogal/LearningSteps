import React from 'react';
import Counter from './counter/Counter.js';
import Players from './players/Players.js';
import Todos from "./todos/ToDos";
import Panel from "./user-panel/Panel";

function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Counter/>
            <hr />
            <Todos />
            <hr />
            <Panel />
            <hr />
            <Players/>
        </div>
    );
}

export default App;
