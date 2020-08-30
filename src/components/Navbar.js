import React from 'react';
// import './Navbar.scss'; Moved to App.js
// import JcLogoPoint from './icons/jcLogoPoint.js';
// import JcLogoBlack from './icons/jcLogoBlack.js';
import JcLogoBlack from './icons/jcLogoBlack';
// import styled from 'styled-components';
// import { ImCross } from 'react-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar({ toggleMenu }) {
	return (
		<nav>
			<AnchorLink href="#intro-section" className="logo">
				{JcLogoBlack}
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
				{/* <a
					href="Jason0429.github/io/jason-cheung-portfolio/folder/resume.pdf"
					target="_blank "
					className="resume-btn">
					Resume
				</a> */}

				<div className="hamburger" onClick={toggleMenu}>
					<div className="line1 line" />
					<div className="line2 line" />
					<div className="line3 line" />
				</div>
				{/* <BsFillGrid3X3GapFill className="social-grid nav-link" onClick={toggleMenu} />
				<TiDelete className="exit-grid nav-link" onClick={toggleMenu} /> */}
			</div>
		</nav>
	);
}

export default Navbar;
