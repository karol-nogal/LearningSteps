import React from 'react';

export default ({player, idx}) => {
    return <tr key={player.id} style={{backgroundColor: player.points > 100 ? 'red' : 'white'}}>
        <td>{idx + 1}</td>
        <td>{player.username}</td>
        <td>{player.points}</td>
    </tr>
}