/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './DeveloperProfile.css';
import DevelopersSocialLinks from './Components/DevelopersSocialLinks/DevelopersSocialLinks';
import DevelopersOtherInfo from './Components/DevelopersOtherInfo/DevelopersOtherInfo';
import Repos from './Components/Repos/Repos';
import DeveloperPageHeader from './Components/DeveloperPageHeader/DeveloperPageHeader';
import DeveloperPageFooter from './Components/DeveloperPageFooter/DeveloperPageFooter';

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
                            <DeveloperPageHeader />
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
                            <DeveloperPageFooter />
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
