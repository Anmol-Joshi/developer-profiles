/* eslint-disable no-console */
import React from 'react';
import './DevelopersSocialLinks.css';
import githubIcon from '../../assets/Profile_Icons/iconfinder_github_317712.png';
import linkedinIcon from '../../assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import codechefIcon from '../../assets/Profile_Icons/codechef-1324440139527402917_32.png';
import hackerrankIcon from '../../assets/Profile_Icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import twitterIcon from '../../assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import mediumIcon from '../../assets/Profile_Icons/iconfinder_Circled_Medium_svg5_5279113.png';
import emailIcon from '../../assets/Profile_Icons/email-24px.svg';

function DevelopersSocialLinks(props) {
    const { developer } = props;
    console.log(developer);
    return (
        <div className="developers-social-social-links">
            <a href={`https://github.com/${developer.id}`} target="blank">
                <img className="developers-social-social-element" src={githubIcon} alt="" />
            </a>
            {developer.hackerrank_id && (
                <a href={`https://www.hackerrank.com/${developer.hackerrank_id}`} target="blank">
                    <img className="developers-social-social-element" src={hackerrankIcon} alt="" />
                </a>
            )}
            {developer.codechef_id && (
                <a href={`https://www.codechef.com/users/${developer.codechef_id}`} target="blank">
                    <img className="developers-social-social-element" src={codechefIcon} alt="" />
                </a>
            )}
            {developer.linkedin_id && (
                <a href={`https://www.linkedin.com/in/${developer.linkedin_id}`} target="blank">
                    <img className="developers-social-social-element" src={linkedinIcon} alt="" />
                </a>
            )}
            {developer.medium_id && (
                <a href={`https://medium.com/@${developer.medium_id}`} target="blank">
                    <img className="developers-social-social-element" src={mediumIcon} alt="" />
                </a>
            )}
            {developer.twitter_id && (
                <a href={`https://twitter.com/${developer.twitter_id}`} target="blank">
                    <img className="developers-social-social-element" src={twitterIcon} alt="" />
                </a>
            )}
            {developer.email && (
                <a href={`mailto:${developer.email}`} target="blank">
                    <img className="developers-social-social-element" src={emailIcon} alt="" />
                </a>
            )}
        </div>
    );
}
export default DevelopersSocialLinks;
