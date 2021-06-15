import React from 'react';
import './HomePage.css';
import headerImage from './assets/Icons_Illustrations/undraw_dev_productivity.png';

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
        // const { value } = this.state;
        return (
            <div>
                <header>
                    <div className="main-heading">
                        The Developer
                        <br className="desktop-br" /> Repository
                    </div>
                    <img className="main-img" src={headerImage} alt="header" />
                </header>
                {/* <label>Enter developer id: </label>
                <input onChange={this.onChange} value={value} />
                <button type="button" onClick={this.onClick}>
                    Submit
                </button> */}
            </div>
        );
    }
}

export default HomePage;
