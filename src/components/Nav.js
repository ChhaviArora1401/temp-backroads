import React from 'react'
import Logo from "../images/logo.svg";
import { socialLinks } from '../data';
import Pagelinks from './pagelinks';
import SocialLink from './socialLinks';

const Nav = () => {

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={Logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <Pagelinks parentclass="nav-links" itemClass="nav-link" />
                <ul className="footer-icons">
                    {socialLinks.map((link) => {
                        return (
                            <SocialLink itemClass="nav-icon" {...socialLinks} />
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav