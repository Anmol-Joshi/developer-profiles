import React from 'react';
import './DeveloperPageHeader.css';

function DeveloperPageHeader() {
    return (
        <header>
            <nav className="dev-page-header-nav">
                <div className="dev-page-header-nav-content">The Developer Profile</div>
                <a href="/" className="dev-page-header-nav-link">
                    <div className="dev-page-header-nav-content">All Developers</div>
                </a>
            </nav>
        </header>
    );
}
export default DeveloperPageHeader;
