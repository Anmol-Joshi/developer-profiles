import React from 'react';
import axios from 'axios';
import './HomePage.css';
import headerImage from './assets/Icons_Illustrations/undraw_dev_productivity.png';
import Developers from './Components/Developers/Developers';
import githubIcon from './assets/Profile_Icons/iconfinder_github_317712.png';
import linkedinIcon from './assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import codechefIcon from './assets/Profile_Icons/codechef-1324440139527402917_32.png';
import hackerrankIcon from './assets/Profile_Icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import twitterIcon from './assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import mediumIcon from './assets/Profile_Icons/iconfinder_Circled_Medium_svg5_5279113.png';

// import SearchDevelopers from './Components/SearchDevelopers/SearchDevelopers';

const FA = require('react-fontawesome');

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPopup: false,
            popupError: false,
            popupInvalidGithubIdError: false,
            githubId: '',
            linkedinId: '',
            codechefId: '',
            hackerrankId: '',
            twitterId: '',
            mediumId: '',
        };
    }

    handleSubmit = () => {
        const postData = {
            github_id: this.state.githubId,
            linkedin_id: this.state.linkedinId,
            codechef_id: this.state.codechefId,
            hackerrank_id: this.state.hackerrankId,
            twitter_id: this.state.twitterId,
            medium_id: this.state.mediumId,
        };
        if (this.state.githubId === '') {
            this.setState({ popupError: true });
            setTimeout(() => {
                this.setState({ popupError: false });
            }, 3000);
        } else {
            axios
                // .post('http://localhost:4000/api/developers/', postData)
                .post('http://developer-profiles.herokuapp.com/api/developers/', postData)
                .then(() => {
                    this.setState({ displayPopup: false });
                })
                .catch(() => {
                    this.setState({ popupInvalidGithubIdError: true });
                    setTimeout(() => {
                        this.setState({ popupInvalidGithubIdError: false });
                    }, 3000);
                });
        }
    };

    render() {
        return (
            <div>
                <header className="homepage-header">
                    <div className="homepage-main-heading">
                        The Developer
                        <br className="desktop-br" /> Repository
                    </div>
                    <img className="homepage-main-img" src={headerImage} alt="header" />
                </header>
                <main className="homepage-main">
                    <div className="homepage-sub-heading">Explore developer profiles</div>
                    <hr className="homepage-sub-hr" />
                    <Developers />
                    {this.state.displayPopup && (
                        <div className="homepage-popup-container">
                            <div className="homepage-popup-container-header">
                                <div className="homepage-form-header">Add developer profile</div>
                            </div>
                            <hr className="homepage-popup-sub-hr" />
                            <div className="homepage-popup-container-body">
                                <div className="homepage-profile-element">
                                    <div className="homepage-profile-element-heading">
                                        <img
                                            className="homepage-profile-element-heading-icon"
                                            src={githubIcon}
                                            alt=""
                                        />
                                        <label className="homepage-profile-element-heading-text" htmlFor="Github">
                                            Github*
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e) => this.setState({ githubId: e.target.value })}
                                        value={this.state.githubId}
                                        id="github-id"
                                        className="homepage-profile-element-input"
                                        name="Github"
                                    />
                                </div>
                                <div className="homepage-profile-element">
                                    <div className="homepage-profile-element-heading">
                                        <img
                                            className="homepage-profile-element-heading-icon"
                                            src={linkedinIcon}
                                            alt=""
                                        />
                                        <label className="homepage-profile-element-heading-text" htmlFor="Linkedin">
                                            Linkedin
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e) => this.setState({ linkedinId: e.target.value })}
                                        value={this.state.linkedinId}
                                        id="linkedin-id"
                                        className="homepage-profile-element-input"
                                        name="Linkedin"
                                    />
                                </div>
                                <div className="homepage-profile-element">
                                    <div className="homepage-profile-element-heading">
                                        <img
                                            className="homepage-profile-element-heading-icon"
                                            src={codechefIcon}
                                            alt=""
                                        />
                                        <label className="homepage-profile-element-heading-text" htmlFor="Codechef">
                                            Codechef
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e) => this.setState({ codechefId: e.target.value })}
                                        value={this.state.codechefId}
                                        id="codechef-id"
                                        className="homepage-profile-element-input"
                                        name="Codechef"
                                    />
                                </div>
                                <div className="homepage-profile-element">
                                    <div className="homepage-profile-element-heading">
                                        <img
                                            className="homepage-profile-element-heading-icon"
                                            src={hackerrankIcon}
                                            alt=""
                                        />
                                        <label className="homepage-profile-element-heading-text" htmlFor="Hackerrank">
                                            Hackerrank
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e) => this.setState({ hackerrankId: e.target.value })}
                                        value={this.state.hackerrankId}
                                        id="hackerrank-id"
                                        className="homepage-profile-element-input"
                                        name="Hackerrank"
                                    />
                                </div>
                                <div className="homepage-profile-element">
                                    <div className="homepage-profile-element-heading">
                                        <img
                                            className="homepage-profile-element-heading-icon"
                                            src={twitterIcon}
                                            alt=""
                                        />
                                        <label className="homepage-profile-element-heading-text" htmlFor="Twitter">
                                            Twitter
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e) => this.setState({ twitterId: e.target.value })}
                                        value={this.state.twitterId}
                                        id="twitter-id"
                                        className="homepage-profile-element-input"
                                        name="Twitter"
                                    />
                                </div>
                                <div className="homepage-profile-element">
                                    <div className="homepage-profile-element-heading">
                                        <img
                                            className="homepage-profile-element-heading-icon"
                                            src={mediumIcon}
                                            alt=""
                                        />
                                        <label className="homepage-profile-element-heading-text" htmlFor="Medium">
                                            Medium
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        onChange={(e) => this.setState({ mediumId: e.target.value })}
                                        value={this.state.mediumId}
                                        id="medium-id"
                                        className="homepage-profile-element-input"
                                        name="Medium"
                                    />
                                </div>
                            </div>
                            <hr className="homepage-popup-sub-hr" />
                            <div className="homepage-popup-container-footer">
                                <br />
                                {this.state.popupError && (
                                    <span className="homepage-popup-error">*Github id cannot be empty</span>
                                )}
                                {this.state.popupInvalidGithubIdError && (
                                    <span className="homepage-popup-error">*Github id incorrect</span>
                                )}
                                <input
                                    onClick={() => this.setState({ displayPopup: false })}
                                    type="button"
                                    className="homepage-popup-cancel-btn"
                                    id="popup-close"
                                    value="Cancel"
                                />
                                <input
                                    onClick={this.handleSubmit}
                                    type="button"
                                    className="homepage-popup-submit-btn"
                                    value="Submit"
                                />
                            </div>
                        </div>
                    )}
                    <hr className="homepage-sub-hr" />
                    <div className="homepage-not-found-message">Could not find what you were looking for?</div>
                    <input
                        onClick={() => this.setState({ displayPopup: true })}
                        type="button"
                        id="popup-open"
                        className="homepage-add-dev-info-btn"
                        value="Add developer info"
                    />
                </main>
                <footer className="homepage-footer">
                    <div className="homepage-footer-text">
                        Made with
                        <FA className="fa-icon" name="fas fa-heart" />
                        by Anmol
                    </div>
                </footer>
            </div>
        );
    }
}

export default HomePage;
