import React from 'react';
import './SocialMediaBar.scss';
import IconGitHub from './icons/github';
import IconLinkedin from './icons/linkedin';
import IconInstagram from './icons/instagram';
import IconFacebook from './icons/facebook';
import IconTwitter from './icons/twitter';

function SocialMediaBar() {
	return (
		<aside>
			<ul className="social-media-bar">
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
		</aside>
	);
}

export default SocialMediaBar;
