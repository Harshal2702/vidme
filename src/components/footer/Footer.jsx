import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Vidme App is a powerful video player, and now Vidme for PC is also available.
                You can easily use Vidme to play videos on Android and Windows.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                    <a href="https://www.facebook.com/">
                        <FaFacebookF />
                        </a>
                    </span>
                    <span className="icon">
                    <a href="https://www.instagram.com/">
                        <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                    <a href="https://twitter.com/i/flow/login">
                        <FaTwitter /></a>
                    </span>
                    <span className="icon">
                    <a href="https://www.linkedin.com/login">
                        <FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
