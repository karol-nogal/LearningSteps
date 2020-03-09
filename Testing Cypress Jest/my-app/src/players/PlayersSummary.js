import React from 'react';

export default ({players}) => {
    const getTotal = () => {
        return players.reduce((acc, player) => acc + player.points, 0);
    }

    const getAverage = () => {
        return getTotal() / players.length
    }

    return <tfoot>
    <tr>
        <td colSpan={2}>Total</td>
        <td>{getTotal()}</td>
    </tr>
    <tr>
        <td colSpan={2}>Average</td>
        <td>{getAverage()}</td>
    </tr>
    </tfoot>
}