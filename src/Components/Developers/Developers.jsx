/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './Developers.css';
import northEastIcon from '../../assets/Icons_Illustrations/north_east-24px.svg';

class Developers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { developers: [] };
    }

    componentDidMount() {
        // https://developer-profiles.herokuapp.com/api/developers/
        axios.get('http://localhost:4000/api/developers').then((res) => {
            this.setState({ developers: res.data });
            // console.log(res.data);
            // console.log(this.state.developers);
        });
    }

    render() {
        const devs = this.state.developers;
        return (
            <div className="developer-info-group">
                {devs.map((dev) => (
                    <div className="developer-info">
                        <img className="developer-avatar" src={dev.avatar_url} alt="" />
                        {/* <a href="/developers/"> */}
                        <Link to={`/developers/${dev.id}`}>
                            <div className="developer-link">
                                <div className="developer-name">{dev.id}</div>
                                <img className="developer-link" src={northEastIcon} alt="" />
                            </div>
                        </Link>
                        {/* </a> */}
                    </div>
                ))}
            </div>
        );
    }
}

export default Developers;
