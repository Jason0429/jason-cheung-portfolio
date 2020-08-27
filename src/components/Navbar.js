import React from 'react';
import './Navbar.scss';
import JcLogoPoint from './icons/jcLogoPoint.js';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
	return (
		<nav>
			<AnchorLink href="#intro-section" className="logo">
				<JcLogoPoint />
			</AnchorLink>

			<div className="nav-links">
				<AnchorLink href="#about-section" className="nav-link">
					About
				</AnchorLink>
				<AnchorLink href="#experience-section" className="nav-link">
					Experience
				</AnchorLink>
				<AnchorLink href="#projects-section" className="nav-link">
					Projects
				</AnchorLink>
				<AnchorLink href="#contact-section" className="nav-link">
					Contact
				</AnchorLink>
				<a
					href="Jason0429.github/io/jason-cheung-portfolio/folder/resume.pdf"
					target="_blank "
					className="resume-btn">
					Resume
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
