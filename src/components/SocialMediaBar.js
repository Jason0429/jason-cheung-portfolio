import React from 'react';
import './SocialMediaBar.css';
import IconGitHub from './icons/github';
import IconLinkedin from './icons/linkedin';
import IconInstagram from './icons/instagram';
import IconFacebook from './icons/facebook';
import IconTwitter from './icons/twitter';

function SocialMediaBar() {
	return (
		<ul className="social-media-bar">
			<li>
				<a href="">
					<IconGitHub className="social-media-icon" />
				</a>
			</li>
			<li>
				<a href="">
					<IconLinkedin className="social-media-icon" />
				</a>
			</li>
			<li>
				<a href="">
					<IconInstagram className="social-media-icon" />
				</a>
			</li>
			<li>
				<a href="">
					<IconFacebook className="social-media-icon" />
				</a>
			</li>
			<li>
				<a href="">
					<IconTwitter className="social-media-icon" />
				</a>
			</li>
		</ul>
	);
}

export default SocialMediaBar;
