import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    onChange = (event) => {
        this.setState({ value: event.target.value });
    };

    onClick = () => {
        window.location = `/developers/${this.state.value}`;
    };

    render() {
        const { value } = this.state;
        return (
            <div>
                <label>Enter developer id: </label>
                <input onChange={this.onChange} value={value} />
                <button type="button" onClick={this.onClick}>
                    Submit
                </button>
            </div>
        );
    }
}

export default HomePage;
