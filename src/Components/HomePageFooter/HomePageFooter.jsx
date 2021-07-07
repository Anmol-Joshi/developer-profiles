import React from 'react';
import './HomePageFooter.css';

const FA = require('react-fontawesome');

function HomePageFooter() {
    return (
        <footer className="homepage-footer">
            <div className="homepage-footer-text">
                Made with
                <FA className="fa-icon" name="fas fa-heart" />
                by Anmol
            </div>
        </footer>
    );
}
export default HomePageFooter;
