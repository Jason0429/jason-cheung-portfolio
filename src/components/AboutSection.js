import React from 'react';
import './AboutSection.scss';
import profilePic from '../img/profile-pic.png';

function AboutSection() {
	return (
		<section className="about-section">
			<div className="wrapper">
				<div className="left">
					<div className="title">About Me</div>
					<p className="desc">Hi, my name is Jason! I am based in Queens, New York.</p>
					<br />
					<p className="desc">
						I started learning web development when I was 16. I wanted to explore outside of my 45-minute
						class in school so I participated in UX/UI Design, Data Science, and Python problem-solving
						questions.
					</p>
				</div>
				<div className="right">
					<img className="profile-pic" src={profilePic} alt="" />
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
