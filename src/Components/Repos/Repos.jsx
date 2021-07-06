import React from 'react';
import './Repos.css';
import northEast from '../../assets/Icons_Illustrations/north_east-24px.svg';

function Repos(props) {
    const { developer } = props;
    return (
        <div>
            {developer.repos.map((repo) => (
                <div key={repo.name}>
                    <hr className="repos-sub-hr" />
                    <div className="repos-repoo">
                        <div className="repos-repo-flex">
                            <a href={`${repo.html_url}/${repo.name}`} target="_blank" rel="noopener noreferrer">
                                <div className="repos-repo-link">
                                    <div className="repos-repo-name">
                                        {repo.name}
                                        <img className="repos-repo-url" src={northEast} alt="" />
                                    </div>
                                </div>
                            </a>
                            <div className="repos-repo-last-updated">Updated on {repo.updated_at.split('T')[0]}</div>
                        </div>
                        <div className="repos-repo-description">{repo.description || ''}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Repos;
