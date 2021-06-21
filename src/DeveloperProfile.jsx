/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
import './DeveloperProfile.css';
import githubIcon from './assets/Profile_Icons/iconfinder_github_317712.png';
import linkedinIcon from './assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import codechefIcon from './assets/Profile_Icons/codechef-1324440139527402917_32.png';
import hackerrankIcon from './assets/Profile_Icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import twitterIcon from './assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import mediumIcon from './assets/Profile_Icons/iconfinder_Circled_Medium_svg5_5279113.png';
import emailIcon from './assets/Profile_Icons/email-24px.svg';
import locationIcon from './assets/Icons_Illustrations/location_on-24px.svg';
import companyIcon from './assets/Icons_Illustrations/business-24px.svg';
import blogLink from './assets/Icons_Illustrations/insert_link-24px.svg';
import northEast from './assets/Icons_Illustrations/north_east-24px.svg';

const FA = require('react-fontawesome');

class DeveloperProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, developer: {}, repos: [] };
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/developers/${this.props.match.params.developerId}`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({ developer: response });
                // this.setState({ repos: response.repos });
                // this.setState({ repos: response.repos });
                this.setState({ loaded: true });
                // setTimeout(() => {
                //     this.setState({ loaded: true });
                // }, 3000);
                // eslint-disable-next-line no-console
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                {this.state.loaded && (
                    <div>
                        <body className="dev-profile-body">
                            <header>
                                <nav className="dev-profile-nav">
                                    <div className="dev-profile-nav-content">The Developer Profile</div>
                                    <a href="/" className="dev-profile-nav-link">
                                        <div className="dev-profile-nav-content">All Developers</div>
                                    </a>
                                </nav>
                            </header>
                            <main>
                                <div>
                                    <div className="dev-profile-banner">
                                        <img
                                            className="dev-profile-banner-image"
                                            src={this.state.developer.avatar_url}
                                            alt=""
                                        />
                                        <div className="dev-profile-info">
                                            <div className="dev-profile-name">{this.state.developer.name}</div>
                                            <div className="dev-profile-bio">{this.state.developer.bio || ''}</div>
                                            <div className="dev-profile-social-links">
                                                <a
                                                    href={`https://github.com/${this.state.developer.github_id}`}
                                                    target="blank"
                                                >
                                                    <img
                                                        className="dev-profile-social-element"
                                                        src={githubIcon}
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href={`https://www.hackerrank.com/${this.state.developer.hackerrank_id}`}
                                                    target="blank"
                                                >
                                                    <img
                                                        className="dev-profile-social-element"
                                                        src={hackerrankIcon}
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href={`https://www.codechef.com/users/${this.state.developer.codechef_id}`}
                                                    target="blank"
                                                >
                                                    <img
                                                        className="dev-profile-social-element"
                                                        src={codechefIcon}
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href={`https://www.linkedin.com/in/${this.state.developer.linkedin_id}`}
                                                    target="blank"
                                                >
                                                    <img
                                                        className="dev-profile-social-element"
                                                        src={linkedinIcon}
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href={`https://medium.com/@${this.state.developer.medium_id}`}
                                                    target="blank"
                                                >
                                                    <img
                                                        className="dev-profile-social-element"
                                                        src={mediumIcon}
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href={`https://twitter.com/${this.state.developer.twitter_id}`}
                                                    target="blank"
                                                >
                                                    <img
                                                        className="dev-profile-social-element"
                                                        src={twitterIcon}
                                                        alt=""
                                                    />
                                                </a>
                                                <a href={`mailto:${this.state.developer.email}`} target="blank">
                                                    <img
                                                        className="dev-profile-social-element"
                                                        src={emailIcon}
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div className="dev-profile-other-info">
                                                <div className="location-div">
                                                    {this.state.developer.location && (
                                                        <img
                                                            className="dev-profile-other-element"
                                                            src={locationIcon}
                                                            alt=""
                                                        />
                                                    )}

                                                    <span className="dev-profile-other-element" id="location">
                                                        {this.state.developer.location || ''}
                                                    </span>
                                                </div>

                                                <div className="work-div">
                                                    {this.state.developer.company && (
                                                        <img
                                                            className="dev-profile-other-element"
                                                            src={companyIcon}
                                                            alt=""
                                                        />
                                                    )}
                                                    <span className="dev-profile-other-element" id="work">
                                                        {this.state.developer.company || ''}
                                                    </span>
                                                </div>

                                                <div className="blog-div">
                                                    <a
                                                        href={this.state.developer.blog}
                                                        rel="noreferrer"
                                                        target="_blank"
                                                    >
                                                        {this.state.developer.blog && (
                                                            <img
                                                                className="dev-profile-other-element"
                                                                src={blogLink}
                                                                alt=""
                                                            />
                                                        )}

                                                        <span className="dev-profile-other-element" id="blog">
                                                            {this.state.developer.blog || ''}
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dev-profile-repos-group">
                                    <div className="dev-profile-repos-heading">Github repositories</div>
                                    <hr className="dev-profile-sub-hr" />
                                    {this.state.loaded && (
                                        <div>
                                            {this.state.developer.repos.map((repo) => (
                                                <div>
                                                    <div className="dev-profile-repoo" key={repo.name}>
                                                        <div className="dev-profile-repo-flex">
                                                            <a
                                                                href={`${repo.html_url}/${repo.name}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <div className="dev-profile-repo-link">
                                                                    <div className="dev-profile-repo-name">
                                                                        {repo.name}
                                                                    </div>

                                                                    <img
                                                                        className="dev-profile-repo-url"
                                                                        src={northEast}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className="dev-profile-repo-last-updated">
                                                                Updated on {repo.updated_at.split('T')[0]}
                                                            </div>
                                                        </div>
                                                        <div className="dev-profile-repo-description">
                                                            {repo.description || ''}
                                                        </div>
                                                        {/* <hr className="dev-profile-sub-hr" /> */}
                                                    </div>
                                                    <hr className="dev-profile-sub-hr" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {/* {this.state.developer.repos.map((item, i) => (
                                        <div>Test</div>
                                    ))} */}
                                </div>
                            </main>
                            <footer className="dev-profile-footer">
                                <div className="dev-profile-footer-text">
                                    Made with
                                    <FA className="fa-icon" name="fas fa-heart" />
                                    by Anmol
                                </div>
                            </footer>
                            <script src="./js/user.js" />
                            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" />
                        </body>
                    </div>
                )}
            </div>
        );
        // <div>Developer data: {JSON.stringify(this.state.developer)}</div>;
    }
}

export default DeveloperProfile;
