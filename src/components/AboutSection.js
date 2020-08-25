import React from 'react';
import './AboutSection.scss';
import profilePic from '../img/profile-pic-2.png';

function AboutSection() {
	return (
		<section className="about-section" id="about-section">
			<div className="wrapper">
				<div className="left">
					<div className="title">About Me</div>
					<p className="desc">Hi, my name is Jason! I am based in Queens, New York.</p>
					<br />
					<p className="desc">
						I started learning web development in junior year of high school. I wanted to explore outside of
						my 45-minute class so I participated in a UX/UI Design bootcamp, Data Science course, and
						solving coding questions.
					</p>
					<br />
					<p className="desc">
						I have loved every step of the way and I hope to gain new experiences and meet bright minds.
					</p>
					<ul className="languages">
						<li>HTML5</li>

						<li>JavaScript (ES6+)</li>
						<li>S(CSS)</li>
						<li>React.js</li>
						<li>WordPress</li>
						<li>Python</li>
						<li>Figma</li>
						<li>inVision</li>
					</ul>
				</div>
				<div className="right">
					<a href="https://www.linkedin.com/in/jason-cheung-27b8751a0/" target="_blank">
						<img className="profile-pic" src={profilePic} alt="Jason Cheung" id="profile-pic" />
					</a>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
