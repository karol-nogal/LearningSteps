import React from 'react';
import PlayersHeading from './PlayersHeading.js';
import PlayersSummary from './PlayersSummary.js';
import PlayersContent from './PlayersContent.js';
import { fetchPlayers } from "./utlis";

class Players extends React.Component {
    state = {
        players: [],
        loading: true,
        error: null
    };

    componentDidMount() {
        fetchPlayers()
            .then(data => this.setState({
                players: data
            }))
            .catch(err => this.setState({
                error: err
            }))
            .finally(() => this.setState({
                loading: false
            }))
    }

    render() {
        if (this.state.error) {
            return <div>We can not fetch players.</div>
        }

        if (this.state.loading) {
            return <div>Loading ...</div>
        }

        return <table>
            <PlayersHeading />
            <PlayersContent players={this.state.players} />
            <PlayersSummary players={this.state.players} />
        </table>
    }
}

export default Players;