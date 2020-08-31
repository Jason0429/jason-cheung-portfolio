import React from 'react';
import '../components/AsideMenu.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import IconGitHub from './icons/github';
import IconLinkedin from './icons/linkedin';
import IconInstagram from './icons/instagram';
import IconFacebook from './icons/facebook';
import IconTwitter from './icons/twitter';

function AsideMenu({ toggleMenu }) {
	return (
		<div className="aside-menu">
			<div className="links">
				<AnchorLink href="#about-section" className="nav-link-aside" onClick={toggleMenu}>
					About
				</AnchorLink>
				<AnchorLink href="#experience-section" className="nav-link-aside" onClick={toggleMenu}>
					Experience
				</AnchorLink>
				<AnchorLink href="#projects-section" className="nav-link-aside" onClick={toggleMenu}>
					Projects
				</AnchorLink>
				<AnchorLink href="#contact-section" className="nav-link-aside" onClick={toggleMenu}>
					Contact
				</AnchorLink>
			</div>
			<ul className="social-media">
				<li>
					<a href="https://github.com/Jason0429" target="_blank">
						<IconGitHub className="social-media-icon" id="github" />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/jason-cheung-0429/" target="_blank">
						<IconLinkedin className="social-media-icon" id="linkedin" />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/j.aysian/" target="_blank">
						<IconInstagram className="social-media-icon" id="instagram" />
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/jason.cheung.961556/" target="_blank">
						<IconFacebook className="social-media-icon" id="facebook" />
					</a>
				</li>
				<li>
					<a href="" target="_blank">
						<IconTwitter className="social-media-icon" id="twitter" />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default AsideMenu;
