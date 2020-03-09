import React from 'react';
import { fetchData } from "./utils";

export class Auth extends React.Component {
    state = {
        isLoggedIn: false,
        userData: null
    };

    componentDidMount() {
        fetchData()
            .then(data => this.setState({
                userData: data,
                isLoggedIn: true,
            }))
    }

    render() {
        if (this.state.isLoggedIn) {
            return this.props.children({userData: this.state.userData})
        } else {
            return 'Proszę się zalogować!'
        }
    }
}