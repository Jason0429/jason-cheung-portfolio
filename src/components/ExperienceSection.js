import React, { useState } from 'react';
import './ExperienceSection.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { uuid } from 'uuidv4';

function ExperienceSection() {
	var clicks = 0;
	var experiences = [
		{
			title: 'STEM Institute 2020',
			displayTitle: 'STEM Institute 2020',
			duration: 'Aug 2020 - Aug 2020',
			desc: (
				<ul className="desc-list">
					<li>
						Hosted by:
						<ul className="sub-list">
							<li>Pace University | Seidenberg School Of Computer Science and Information Systems</li>
							<li>Billion Oyster Project</li>
							<li>National Science Foundation</li>
						</ul>
					</li>
					<li>Learned Data Science with Python using Numpy, Pandas, Matplotlib, and Plotly</li>
					<li>Presented project analyzing real data sets from the Billion Oyster Project</li>
				</ul>
			),
			id: uuid()
		},
		{
			title: 'DownToDash Inc.',
			displayTitle: 'DownToDash',
			duration: 'Jul 2020 - Aug 2020',
			desc: (
				<ul className="desc-list">
					<li>Marketing and Tech Intern</li>
					<li>Learned to promote B2B services through Facebook, LinkedIn, and Lunchclub</li>
					<li>Updated virtual events on Eventbrite and Meetup</li>
					<li>Participated in virtual networking and entertainment events</li>
					<li>Updated company website using WordPress</li>
				</ul>
			),
			id: uuid()
		},
		{
			title: 'America On Tech - UX Design Bootcamp',
			displayTitle: 'UX Design Bootcamp',
			duration: 'Jul 2020 - Aug 2020',
			desc: (
				<ul className="desc-list">
					<li>
						Worked with a mentor to build a market-ready, clickable high-fidelity prototype of a mobile app
					</li>
					<li>Used Figma, inVision, and Whimsical</li>
					<li>* Won Best UX Prototype</li>
				</ul>
			),
			id: uuid()
		},
		{
			title: 'America On Tech - TECH360',
			displayTitle: 'TECH360',
			duration: 'Sep 2019 - Dec 2019',
			desc: (
				<ul className="desc-list">
					<li>Received 20+ hours of coding training using HTML, CSS, and Bootstrap</li>
					<li>
						Developed a portfolio of technology projects that illustrated the understanding of web
						development
					</li>
					<li>* Won Best Website</li>
				</ul>
			),
			id: uuid()
		},
		{
			title: 'The Internet',
			displayTitle: 'The Internet',
			duration: 'Sep 2019 - Present',
			desc: (
				<ul className="desc-list">
					<li>The internet is a wonderful place!</li>
					<li>
						Thank you to:
						<ul className="sub-list">
							<li>scrimba.com</li>
							<li>sololearn.com</li>
							<li>hackerrank.com</li>
							<li>youtube.com</li>
							<li>stackoverflow.com</li>
						</ul>
					</li>
				</ul>
			),
			id: uuid()
		}
	];

	const [ currentTab, setCurrentTab ] = useState({
		...experiences[0]
	});

	function changeCard(e) {
		let tab = e.target;

		// If same first tab is clicked
		if (tab.id === currentTab.id && clicks === 0) return;
		else clicks++;

		// Change card info
		experiences.forEach((exp) => {
			if (exp.id === tab.getAttribute('id')) {
				return setCurrentTab((prevTab) => {
					if (prevTab.id === exp.id) return;
					return {
						title: exp.title,
						displayTitle: exp.displayTitle,
						duration: exp.duration,
						desc: exp.desc,
						id: exp.id
					};
				});
			}
		});

		let tabIndicator = document.querySelector('.tab-indicator');
		let activeTabs = document.querySelector('.tab.active');
		let allTabs = document.querySelectorAll('.tab');
		// removes active class
		activeTabs.classList.remove('active');
		// adds class to selected tab
		tab.classList.add('active');

		// Tab Indicator Animation
		for (var i = 0; i < allTabs.length; i++) {
			if (allTabs[i].classList.contains('active')) {
				return (tabIndicator.style.top = `calc(calc(100%/${experiences.length})*${i})`);
			}
		}
	}

	return (
		<section className="experience-section" id="experience-section">
			<div className="wrapper">
				<div className="title">Experience</div>
				<div className="inner-wrapper">
					<ul className="tab-slider">
						<div className="tab-indicator" style={{ height: `calc(100%/${experiences.length})` }} />
						{experiences.map((exp) => (
							<li
								className={exp.id === currentTab.id ? 'tab active' : 'tab'}
								id={exp.id}
								onClick={changeCard}>
								{exp.displayTitle}
							</li>
						))}
					</ul>
					<div className="info">
						<div className="card">
							<div className="info-title">{currentTab.title}</div>
							<div className="duration">{currentTab.duration}</div>
							<div className="desc">{currentTab.desc}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ExperienceSection;
