export const fetchPlayers = () => fetch('players.json').then(res => res.json());