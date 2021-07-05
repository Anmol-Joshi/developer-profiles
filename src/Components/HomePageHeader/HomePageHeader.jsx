import React from 'react';
import './HomePageHeader.css';
import headerImage from '../../assets/Icons_Illustrations/undraw_dev_productivity.png';

function HomePageHeader() {
    return (
        <header className="homepage-header-header">
            <div className="homepage-header-main-heading">
                The Developer
                <br className="desktop-br" /> Repository
            </div>
            <img className="homepage-header-main-img" src={headerImage} alt="header" />
        </header>
    );
}
export default HomePageHeader;
