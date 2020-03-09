import React from 'react';

export default ({
                    value, onIncrease, onDecrease, onReset
                }) => {
    return <div>
        <h1 id="score" style={{textAlign: 'center'}}>{value}</h1>
        <button id='decrease' onClick={onDecrease}>-</button>
        <button id='reset' onClick={onReset}>reset</button>
        <button id='increase' onClick={onIncrease}>+</button>
    </div>
}