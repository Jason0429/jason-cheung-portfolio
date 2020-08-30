import { uuid } from 'uuidv4';
import React from 'react';
import stem from '../img/stem.png';
import dtd from '../img/dtd.png';
import aot from '../img/aot.png';
import internet from '../img/internet.png';

var experiences = [
	{
		title: 'STEM Institute 2020',
		displayTitle: 'STEM Institute 2020',
		duration: 'Aug 2020 - Aug 2020',
		desc: (
			<ul className="desc-list">
				<li>Learned Data Science with Python using Numpy, Pandas, Matplotlib, and Plotly</li>
				<li>Presented project analyzing real data sets from the Billion Oyster Project</li>
				<li>
					Hosted by:
					<ul className="sub-list">
						<li>Pace University | Seidenberg School Of CSIS</li>
						<li>Billion Oyster Project</li>
						<li>National Science Foundation</li>
					</ul>
				</li>
			</ul>
		),
		id: uuid(),
		img: stem
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
		id: uuid(),
		img: dtd
	},
	{
		title: 'America On Tech - UX Design Bootcamp',
		displayTitle: 'UX Design Bootcamp',
		duration: 'Jul 2020 - Aug 2020',
		desc: (
			<ul className="desc-list">
				<li>Worked with a mentor to build a market-ready, clickable high-fidelity prototype of a mobile app</li>
				<li>Used Figma, inVision, and Whimsical</li>
				<li>* Won Best UX Prototype</li>
			</ul>
		),
		id: uuid(),
		img: aot
	},
	{
		title: 'America On Tech - TECH360',
		displayTitle: 'TECH360',
		duration: 'Sep 2019 - Dec 2019',
		desc: (
			<ul className="desc-list">
				<li>Received 20+ hours of coding training using HTML, CSS, and Bootstrap</li>
				<li>
					Developed a portfolio of technology projects that illustrated the understanding of web development
				</li>
				<li>* Won Best Website</li>
			</ul>
		),
		id: uuid(),
		img: aot
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
		id: uuid(),
		img: internet
	}
];

export default experiences;
