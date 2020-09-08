import { uuid } from 'uuidv4';
import React from 'react';
import List from '../components/icons/list';
import Oyster from '../components/icons/oyster';
import Crosshair from '../components/icons/crosshair';
import Battleship from '../components/icons/battleship';
import Medicine from '../components/icons/medicine';
import Music from '../components/icons/music';

const projects = [
	{
		title: 'Amazon Clone',
		desc:
			'Amazon clone consisting of a fully functioning payment system using Stripe. Props to: @TheCleverProgrammer',
		icon: Music,
		github: '',
		languages: [ 'React.js', 'Redux', 'Firebase', 'Stripe' ]
	},
	{
		title: 'WhatsApp Clone',
		desc:
			'Basic front-end layout of web WhatsApp combined with real-time messaging updates. Props to: @TheCleverProgrammer',
		icon: List,
		github: '',
		languages: [ 'React.js', 'SCSS', 'Node.js', 'MongoDB', 'Express.js' ]
	},
	{
		title: 'Microsoft To-do Clone',
		desc: "A web clone of Microsoft's To-Do List application.",
		icon: List,
		github: '',
		languages: [ 'React.js', 'SCSS' ]
	},
	{
		title: 'Billion Oyster Project',
		desc: '',
		icon: Oyster,
		github: '',
		languages: [ 'Python', 'Numpy', 'Pandas', 'Matplotlib' ]
	},
	{
		title: 'DownToDash Website',
		desc: "Updated appearance to DownToDash's company website.",
		icon: Oyster,
		github: '',
		languages: [ 'Wordpress', 'WPBakery' ]
	},
	{
		title: 'Artful Skin',
		desc:
			"High-fidelity prototype for America On Tech's UX Design Bootcamp. Social media app for tattoo artists to connect with others, share their artwork, and promote their business.",
		icon: Oyster,
		github: '',
		languages: [ 'Figma', 'Whimsical', 'inVision' ]
	},
	{
		title: 'Minecraft Name Sniper',
		desc: '',
		icon: Crosshair,
		github: '',
		languages: [ 'Python' ]
	},
	{
		title: 'Battleship',
		desc: '',
		icon: Battleship,
		github: '',
		languages: [ 'HTML', 'CSS', 'JavaScript' ]
	},
	{
		title: 'Human Diagnostic Tool',
		desc: '',
		icon: Medicine,
		github: '',
		languages: [ 'HTML', 'CSS', 'JavaScript' ]
	},
	{
		title: 'TransitHub',
		desc: "Final project at America On Tech's TECH360 program.",
		icon: Medicine,
		github: '',
		languages: [ 'HTML', 'CSS', 'JavaScript' ]
	}
];

export default projects;
