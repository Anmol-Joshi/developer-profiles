/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import './HomePage.css';
import Developers from './Components/Developers/Developers';
import HomePageHeader from './Components/HomePageHeader/HomePageHeader';
import HomePagePopup from './Components/HomePagePopup/HomePagePopup';
import HomePageFooter from './Components/HomePageFooter/HomePageFooter';

// const FA = require('react-fontawesome');

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPopup: false,
        };
    }

    popupControl(v) {
        this.setState({ displayPopup: v });
    }

    render() {
        return (
            <div>
                <HomePageHeader />
                <main className="homepage-main">
                    <div className="homepage-sub-heading">Explore developer profiles</div>
                    <hr className="homepage-sub-hr" />
                    <Developers />
                    {this.state.displayPopup && <HomePagePopup popupControl={this.popupControl.bind(this)} />}
                    <hr className="homepage-sub-hr" />
                    <div className="homepage-not-found-message">Could not find what you were looking for? </div>
                    <input
                        onClick={() => this.popupControl(true)}
                        type="button"
                        id="popup-open"
                        className="homepage-add-dev-info-btn"
                        value="Add developer info"
                    />
                </main>
                <HomePageFooter />
            </div>
        );
    }
}

export default HomePage;
