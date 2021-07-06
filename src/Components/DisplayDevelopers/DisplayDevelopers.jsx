import { Link } from 'react-router-dom';
import React from 'react';
import './DisplayDevelopers.css';
import northEastIcon from '../../assets/Icons_Illustrations/north_east-24px.svg';

function DisplayDevelopers(props) {
    const { developers } = props;
    return (
        <div className="display-developers-developer-info-group">
            {developers.map((dev) => (
                <div className="display-developers-developer-info">
                    <Link to={`/developers/${dev.id}`}>
                        <img className="display-developers-developer-avatar" src={dev.avatar_url} alt="" />
                    </Link>
                    <Link to={`/developers/${dev.id}`}>
                        <div className="display-developers-link">
                            <div className="display-developers-name">{dev.id}</div>
                            <img className="display-developers-link" src={northEastIcon} alt="" />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default DisplayDevelopers;
