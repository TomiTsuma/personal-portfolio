import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <span>Thomas Tsuma</span>
                </div>

                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/tomitsuma" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/TomiTsuma" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:tommytsuma7@gmail.com">Email</a>
                </div>

                <div className="copyright">
                    &copy; {new Date().getFullYear()} Thomas Tsuma. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
