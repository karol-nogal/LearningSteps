import React from 'react';
import CounterBoard from './CounterBoard';

class Counter extends React.Component {
    state = {
        value: 0
    };

    onIncrease = () => {
        this.setState({
            value: this.state.value + 1
        })
    };

    onDecrease = () => {
        if (this.state.value === 0) {
            return;
        }

        this.setState({
            value: this.state.value - 1
        })
    };

    onReset = () => {
        this.setState({
            value: 0
        })
    };

    render() {
        return <CounterBoard
            value={this.state.value}
            onIncrease={this.onIncrease}
            onDecrease={this.onDecrease}
            onReset={this.onReset}
        />
    }
}

export default Counter;