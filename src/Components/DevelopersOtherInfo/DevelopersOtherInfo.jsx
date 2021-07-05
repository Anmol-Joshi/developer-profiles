import React from 'react';
import './DevelopersOtherInfo.css';
import locationIcon from '../../assets/Icons_Illustrations/location_on-24px.svg';
import companyIcon from '../../assets/Icons_Illustrations/business-24px.svg';
import blogLink from '../../assets/Icons_Illustrations/insert_link-24px.svg';

function DevelopersOtherInfo(props) {
    const { developer } = props;
    return (
        <div className="developers-other-info-other-info">
            {developer.location && (
                <div className="location-div">
                    <img className="developers-other-info-other-element" src={locationIcon} alt="" />
                    <span className="developers-other-info-other-element" id="location">
                        {developer.location}
                    </span>
                </div>
            )}
            {developer.company && (
                <div className="work-div">
                    <img className="developers-other-info-other-element" src={companyIcon} alt="" />

                    <span className="developers-other-info-other-element" id="work">
                        {developer.company}
                    </span>
                </div>
            )}
            {developer.blog && (
                <div className="blog-div">
                    <a href={developer.blog} rel="noreferrer" target="_blank">
                        <img className="developers-other-info-other-element" src={blogLink} alt="" />
                        <u>
                            <span className="developers-other-info-other-element" id="blog">
                                {developer.blog}
                            </span>
                        </u>
                    </a>
                </div>
            )}
        </div>
    );
}

export default DevelopersOtherInfo;
