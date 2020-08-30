import React from 'react';
import './AboutSection.scss';
import profilePic from '../img/profile-pic-2.png';
import Code from './icons/code';
import Heart from './icons/heart';
import Design from './icons/design';

function AboutSection() {
	const languages = [
		'HTML5',
		'jQuery',
		'JavaScript',
		'React.js',
		'S(CSS)',
		'WordPress',
		'Python',
		'Github',
		'Google Colab',
		'Visual Studio Code'
	];

	const designs = [ 'Figma', 'inVision', 'Whimsical' ];

	const interests = [ 'Chinese Dragon Boat', 'Chinese Lion Dance', 'Cooking', 'Weightlifting' ];

	return (
		// Face, Keyboard, Dragon Boat
		<section className="about-section" id="about-section">
			<div className="wrapper">
				<div className="about grid-item">
					<div className="">
						<div className="title">About Me</div>
						<p className="desc">Hi, my name is Jason! I am based in Queens, New York.</p>
						<br />
						<p className="desc">
							I started learning web development in my junior year of high school. I wanted to explore
							outside of my 45-minute class so I watched youtube, joined a UX Design bootcamp,
							participated in a Data Science course, and practiced solving coding questions.
						</p>
						<br />
						<p className="desc">
							I have loved every step of the way and I hope to gain new experiences and meet amazing
							people.
						</p>
					</div>
				</div>

				<div className="grid-item coding">
					{Code}
					<div className="name">Coding</div>
					<ul className="languages">{languages.map((language) => <li>{language}</li>)}</ul>
				</div>
				<div className="col">
					<div className="grid-item">
						{Design}
						<div className="name">Design</div>
						<ul className="languages">{designs.map((design) => <li>{design}</li>)}</ul>
					</div>
					<div className="grid-item">
						{Heart}
						<div className="name">Interests</div>
						<ul className="languages">{interests.map((interest) => <li>{interest}</li>)}</ul>
					</div>
				</div>
			</div>

			{/* <div className="right">
				<div className="overlay" />
				<a href="https://www.linkedin.com/in/jason-cheung-0429/" target="_blank">
					<img className="profile-pic" src={profilePic} alt="Jason Cheung" id="profile-pic" />
				</a>
			</div> */}
		</section>
	);
}

export default AboutSection;
