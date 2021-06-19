/* eslint-disable react/self-closing-comp */
import React from 'react';
import './DeveloperProfile.css';

const FA = require('react-fontawesome');

class DeveloperProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/developers/${this.props.match.params.developerId}`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({ developer: response, loaded: true });
                // eslint-disable-next-line no-console
                console.log(this.state.developer);
            });
    }

    render() {
        return (
            <div>
                {this.state.loaded && (
                    <div>
                        <body>
                            <header>
                                <nav>
                                    <div className="nav-content">The Developer Profile</div>
                                    <div className="nav-content">
                                        <a href="/">All Developers</a>
                                    </div>
                                </nav>
                            </header>
                            <main>
                                <div className="banner-data"></div>
                                <div className="repos-group">
                                    <div className="repos-heading">Github repositories</div>
                                    <hr className="sub-hr" />
                                </div>

                                {/* </div> */}
                            </main>
                            <footer>
                                <div className="footer-text">
                                    Made with
                                    <FA className="fa-icon" name="fas fa-heart" />
                                    by Anmol
                                </div>
                            </footer>
                            <script src="./js/user.js"></script>
                            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
                        </body>
                    </div>
                )}
            </div>
        );
        // <div>Developer data: {JSON.stringify(this.state.developer)}</div>;
    }
}

export default DeveloperProfile;
