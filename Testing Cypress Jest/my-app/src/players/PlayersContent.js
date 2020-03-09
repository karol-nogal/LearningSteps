import React from 'react';
import PlayerRow from "./PlayerRow";

export default ({players}) => {
    return <tbody>
    {
        players.map((player, idx) => {
            return <PlayerRow key={player.id} player={player} idx={idx}/>
        })
    }
    </tbody>
}