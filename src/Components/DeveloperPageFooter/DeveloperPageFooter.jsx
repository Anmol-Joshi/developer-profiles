import React from 'react';
import './DeveloperPageFooter.css';

const FA = require('react-fontawesome');

function DeveloperPageFooter() {
    return (
        <footer className="dev-page-footer">
            <div className="dev-page-footer-text">
                Made with
                <FA className="fa-icon" name="fas fa-heart" />
                by Anmol
            </div>
        </footer>
    );
}
export default DeveloperPageFooter;
