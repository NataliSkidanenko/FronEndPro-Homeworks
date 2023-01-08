import React from 'react';
import './Reaction.css';
class Reaction extends React.Component {
    constructor(props) {
        super(props);
        this.vote = this.vote.bind(this);
        this.symbol = this.props.symbol;
        this.state = {
            counter: 0,
        };
    }

    render() {
        return (
            <div className="reaction">
                <button onClick={this.vote}>{this.symbol}</button>
                <p>{this.state.counter}</p>
            </div>
        );
    }

    vote() {
        this.setState({counter: this.state.counter + 1});
    }
}

export default Reaction;
