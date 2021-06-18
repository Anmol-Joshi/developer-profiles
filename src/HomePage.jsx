import React from 'react';
import './HomePage.css';
import headerImage from './assets/Icons_Illustrations/undraw_dev_productivity.png';
import githubIcon from './assets/Profile_Icons/iconfinder_github_317712.png';
import linkedinIcon from './assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import codechefIcon from './assets/Profile_Icons/codechef-1324440139527402917_32.png';
import hackerrankIcon from './assets/Profile_Icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import twitterIcon from './assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import mediumIcon from './assets/Profile_Icons/iconfinder_Circled_Medium_svg5_5279113.png';
import Developers from './Components/Developers/Developers';
import SearchDevelopers from './Components/SearchDevelopers/SearchDevelopers';

const FA = require('react-fontawesome');

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: '',
        };
    }

    // onChange = (event) => {
    //     this.setState({ value: event.target.value });
    // };

    // onClick = () => {
    //     window.location = `/developers/${this.state.value}`;
    // };

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
                <main>
                    <div className="sub-heading">Explore developer profiles</div>
                    <hr className="sub-hr" />
                    <SearchDevelopers />
                    {/* <div className="search-input-div">
                        <input className="search-input" defaultValue="" type="text" placeholder="Search for username" />
                        <svg
                            className="search-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                    </div> */}
                    <Developers />
                    {/* <div className="developer-info-group">
                        <div className="developer-info">
                            <img className="developer-avatar" src={developerImage} alt="" />
                            <div className="developer-name">1</div>
                            <img className="developer-link" src={northEastIcon} alt="" />
                        </div>
                        <div className="developer-info">
                            <img className="developer-avatar" src={developerImage} alt="" />
                            <div className="developer-name">2</div>
                            <a href="/developers/gcnit">
                                <img className="developer-link" src={northEastIcon} alt="" />
                            </a>
                        </div>
                        <div className="developer-info">
                            <img className="developer-avatar" src={developerImage} alt="" />
                            <div className="developer-name">2</div>
                            <a href="/developers/gcnit">
                                <img className="developer-link" src={northEastIcon} alt="" />
                            </a>
                        </div>
                        <div className="developer-info">
                            <img className="developer-avatar" src={developerImage} alt="" />
                            <div className="developer-name">2</div>
                            <a href="/developers/gcnit">
                                <img className="developer-link" src={northEastIcon} alt="" />
                            </a>
                        </div>
                    </div> */}
                    <hr className="sub-hr" />
                    <div className="not-found-message">Could not find what you were looking for?</div>
                    <input type="button" id="popup-open" className="add-dev-info-btn" value="Add developer info" />
                    <div className="popup-container">
                        <div className="popup-container-header">
                            <div className="form-header">Add developer profile</div>
                        </div>
                        <hr className="popup-sub-hr" />
                        <div className="popup-container-body">
                            <div className="profile-element">
                                <div className="profile-element-heading">
                                    <img className="profile-element-heading-icon" src={githubIcon} alt="" />
                                    <label className="profile-element-heading-text" htmlFor="Github">
                                        Github*
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    value=""
                                    id="github-id"
                                    className="profile-element-input"
                                    name="Github"
                                />
                            </div>
                            <div className="profile-element">
                                <div className="profile-element-heading">
                                    <img className="profile-element-heading-icon" src={linkedinIcon} alt="" />
                                    <label className="profile-element-heading-text" htmlFor="Linkedin">
                                        Linkedin
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    value=""
                                    id="linkedin-id"
                                    className="profile-element-input"
                                    name="Linkedin"
                                />
                            </div>
                            <div className="profile-element">
                                <div className="profile-element-heading">
                                    <img className="profile-element-heading-icon" src={codechefIcon} alt="" />
                                    <label className="profile-element-heading-text" htmlFor="Codechef">
                                        Codechef
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    value=""
                                    id="codechef-id"
                                    className="profile-element-input"
                                    name="Codechef"
                                />
                            </div>
                            <div className="profile-element">
                                <div className="profile-element-heading">
                                    <img className="profile-element-heading-icon" src={hackerrankIcon} alt="" />
                                    <label className="profile-element-heading-text" htmlFor="Hackerrank">
                                        Hackerrank
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    value=""
                                    id="hackerrank-id"
                                    className="profile-element-input"
                                    name="Hackerrank"
                                />
                            </div>
                            <div className="profile-element">
                                <div className="profile-element-heading">
                                    <img className="profile-element-heading-icon" src={twitterIcon} alt="" />
                                    <label className="profile-element-heading-text" htmlFor="Twitter">
                                        Twitter
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    value=""
                                    id="twitter-id"
                                    className="profile-element-input"
                                    name="Twitter"
                                />
                            </div>
                            <div className="profile-element">
                                <div className="profile-element-heading">
                                    <img className="profile-element-heading-icon" src={mediumIcon} alt="" />
                                    <label className="profile-element-heading-text" htmlFor="Medium">
                                        Medium
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    value=""
                                    id="medium-id"
                                    className="profile-element-input"
                                    name="Medium"
                                />
                            </div>
                        </div>
                        <hr className="popup-sub-hr" />
                        <div className="popup-container-footer">
                            <input type="button" className="popup-cancel-btn" id="popup-close" value="Cancel" />
                            <input type="button" className="popup-submit-btn" value="Submit" />
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="footer-text">
                        Made with
                        <FA className="fa-icon" name="fas fa-heart" />
                        by Anmol
                    </div>
                </footer>
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
