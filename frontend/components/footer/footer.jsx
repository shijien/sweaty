import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer-bar">
            <div id="footer-social">
                <ul>
                    <li>SOCIAL</li>
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Github</a></li>
                </ul>
            </div>
            <div id="footer-about">
                <ul>
                    <li>ABOUT ME</li>
                </ul>
            </div>
        </div>
    );
};
export default Footer;