import React from 'react'
import { socialLinks } from '../data';
import Pagelinks from './pagelinks';
import SocialLink from './socialLinks';
const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks parentclass="footer-links" itemClass="footer-link"/>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <SocialLink itemClass="footer-link" {...socialLinks} />
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer