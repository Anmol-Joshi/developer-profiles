import React from 'react';
import './DeveloperProfile.css';
import DevelopersSocialLinks from './Components/DevelopersSocialLinks/DevelopersSocialLinks';
import DevelopersOtherInfo from './Components/DevelopersOtherInfo/DevelopersOtherInfo';
import Repos from './Components/Repos/Repos';

const FA = require('react-fontawesome');

class DeveloperProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, developer: {} };
    }

    componentDidMount() {
        fetch(`https://developer-profiles.herokuapp.com/api/developers/${this.props.match.params.developerId}`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({ developer: response });
                this.setState({ loaded: true });
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
                                            <DevelopersSocialLinks developer={this.state.developer} />
                                            <DevelopersOtherInfo developer={this.state.developer} />
                                        </div>
                                    </div>
                                </div>
                                <div className="dev-profile-repos-group">
                                    <div className="dev-profile-repos-heading">Github repositories</div>
                                    {this.state.loaded && <Repos developer={this.state.developer} />}
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
    }
}

export default DeveloperProfile;
