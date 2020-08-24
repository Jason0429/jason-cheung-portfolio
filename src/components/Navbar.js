import React from 'react';
import './Navbar.css';
import JcLogoPoint from './icons/jcLogoPoint.js';
import styled from 'styled-components';

function Navbar() {
	return (
		<nav>
			<a href="" className="logo">
				<JcLogoPoint />
			</a>

			<div className="nav-links">
				<a href="" className="nav-link">
					About
				</a>
				<a href="" className="nav-link">
					Experience
				</a>
				<a href="" className="nav-link">
					Projects
				</a>
				<a href="" className="nav-link">
					Contact
				</a>
				<a href="" className="resume-btn">
					Resume
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
