/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import './HomePagePopup.css';
import githubIcon from '../../assets/Profile_Icons/iconfinder_github_317712.png';
import linkedinIcon from '../../assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import codechefIcon from '../../assets/Profile_Icons/codechef-1324440139527402917_32.png';
import hackerrankIcon from '../../assets/Profile_Icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import twitterIcon from '../../assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import mediumIcon from '../../assets/Profile_Icons/iconfinder_Circled_Medium_svg5_5279113.png';

class HomePagePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                .post('https://developer-profiles.herokuapp.com/api/developers/', postData)
                .then(() => {
                    this.props.popupControl(false);
                    window.location.reload();
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
            <div className="homepagepopup-background">
                <div className="homepagepopup-popup-container">
                    <div className="homepagepopup-popup-container-header">
                        <div className="homepagepopup-form-header">Add developer profile</div>
                    </div>
                    <hr className="homepagepopup-popup-sub-hr" />
                    <div className="homepagepopup-popup-container-body">
                        <div className="homepagepopup-profile-element">
                            <div className="homepagepopup-profile-element-heading">
                                <img className="homepagepopup-profile-element-heading-icon" src={githubIcon} alt="" />
                                <label className="homepagepopup-profile-element-heading-text" htmlFor="Github">
                                    Github*
                                </label>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => this.setState({ githubId: e.target.value })}
                                value={this.state.githubId}
                                id="github-id"
                                className="homepagepopup-profile-element-input"
                                name="Github"
                            />
                        </div>
                        <div className="homepagepopup-profile-element">
                            <div className="homepagepopup-profile-element-heading">
                                <img className="homepagepopup-profile-element-heading-icon" src={linkedinIcon} alt="" />
                                <label className="homepagepopup-profile-element-heading-text" htmlFor="Linkedin">
                                    Linkedin
                                </label>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => this.setState({ linkedinId: e.target.value })}
                                value={this.state.linkedinId}
                                id="linkedin-id"
                                className="homepagepopup-profile-element-input"
                                name="Linkedin"
                            />
                        </div>
                        <div className="homepagepopup-profile-element">
                            <div className="homepagepopup-profile-element-heading">
                                <img className="homepagepopup-profile-element-heading-icon" src={codechefIcon} alt="" />
                                <label className="homepagepopup-profile-element-heading-text" htmlFor="Codechef">
                                    Codechef
                                </label>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => this.setState({ codechefId: e.target.value })}
                                value={this.state.codechefId}
                                id="codechef-id"
                                className="homepagepopup-profile-element-input"
                                name="Codechef"
                            />
                        </div>
                        <div className="homepagepopup-profile-element">
                            <div className="homepagepopup-profile-element-heading">
                                <img
                                    className="homepagepopup-profile-element-heading-icon"
                                    src={hackerrankIcon}
                                    alt=""
                                />
                                <label className="homepagepopup-profile-element-heading-text" htmlFor="Hackerrank">
                                    Hackerrank
                                </label>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => this.setState({ hackerrankId: e.target.value })}
                                value={this.state.hackerrankId}
                                id="hackerrank-id"
                                className="homepagepopup-profile-element-input"
                                name="Hackerrank"
                            />
                        </div>
                        <div className="homepagepopup-profile-element">
                            <div className="homepagepopup-profile-element-heading">
                                <img className="homepagepopup-profile-element-heading-icon" src={twitterIcon} alt="" />
                                <label className="homepagepopup-profile-element-heading-text" htmlFor="Twitter">
                                    Twitter
                                </label>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => this.setState({ twitterId: e.target.value })}
                                value={this.state.twitterId}
                                id="twitter-id"
                                className="homepagepopup-profile-element-input"
                                name="Twitter"
                            />
                        </div>
                        <div className="homepagepopup-profile-element">
                            <div className="homepagepopup-profile-element-heading">
                                <img className="homepagepopup-profile-element-heading-icon" src={mediumIcon} alt="" />
                                <label className="homepagepopup-profile-element-heading-text" htmlFor="Medium">
                                    Medium
                                </label>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => this.setState({ mediumId: e.target.value })}
                                value={this.state.mediumId}
                                id="medium-id"
                                className="homepagepopup-profile-element-input"
                                name="Medium"
                            />
                        </div>
                    </div>
                    <hr className="homepagepopup-popup-sub-hr" />
                    <div className="homepagepopup-popup-container-footer">
                        <br />
                        {this.state.popupError && (
                            <span className="homepagepopup-popup-error">*Github id cannot be empty</span>
                        )}
                        {this.state.popupInvalidGithubIdError && (
                            <span className="homepagepopup-popup-error">*Github id incorrect</span>
                        )}
                        <input
                            onClick={() => this.props.popupControl(false)}
                            type="button"
                            className="homepagepopup-popup-cancel-btn"
                            id="popup-close"
                            value="Cancel"
                        />
                        <input
                            onClick={this.handleSubmit}
                            type="button"
                            className="homepagepopup-popup-submit-btn"
                            value="Submit"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePagePopup;
